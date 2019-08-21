// table PAGE

// Create the general table with general information
let url = "https://api.myjson.com/bins/zyv02";

fetch(url, {
}).then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);

}).then(function (json) {

    data = json;

    let books = data.books;
    console.log(books);
    libros(books);

    function libros(datos) {

        let sitiolibro = document.getElementById("libro");



        for (let i = 0; i < datos.length; i++) {

            let mylibro = document.createElement("div");
            mylibro.setAttribute("class", "flip-card");

            let newlibro = document.createElement("div"); // creamos div donde guardaremos el libro
            newlibro.setAttribute("class", "flip-card-inner"); // asignamos la class para que rote

            let bookfront = document.createElement("div"); // creamos div para caratula

            bookfront.setAttribute("class", "flip-card-front"); // asignamos la class para que rote
            let caratula = document.createElement("img"); // creamos la imagen
            caratula.setAttribute("src", datos[i].cover);
            caratula.setAttribute("alt", datos[i].detail);
            caratula.setAttribute("style", "height:300px; width: 200px");
            bookfront.append(caratula);

            let bookback = document.createElement("div"); //creamos div para back
            bookback.setAttribute("class", "flip-card-back");

            let titulo = document.createElement("h1");
            let descripcion = document.createElement("p");
            let masinfo = document.createElement("button");

            titulo = datos[i].title;
            descripcion = datos[i].description;



            mylibro.append(newlibro);
            newlibro.append(bookfront);
            newlibro.append(bookback);

            sitiolibro.append(mylibro);
            // <div id="libro" class="flip-card-inner">
            // template += `
            // <div class="flip-card-front">
            //         <img src="./images/gatito.jpg" alt="Avatar" style="height:300px; width: 200px">
            //     </div>
            //     <div class="flip-card-back">
            //         <h1>Titulo</h1>
            //         <p>Descripción</p>
            //         <button class="btn btn-danger">Más Info</button>
            //     </div>
            //   `;

            // newlibro.innerHTML = template;
        }

    }
    // <div class="flip-card-front">
    //     <img src="./images/gatito.jpg" alt="Avatar" style="height:300px; width: 200px">
    // </div>
    // <div class="flip-card-back">
    //     <h1>Titulo</h1>
    //     <p>Descripción</p>
    //     <button class="btn btn-danger">Más Info</button>
    // </div>

}).catch(function (error) {
    console.log("Request failed: " + error.message);
});
