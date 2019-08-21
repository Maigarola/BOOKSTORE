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
            mylibro.setAttribute("class", "mybook flip-card");

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

            let titulo = document.createElement("h5");
            let descripcion = document.createElement("p");
            let masinfo = document.createElement("button");

            titulo.innerHTML = datos[i].title;
            descripcion.innerHTML = datos[i].description;
            masinfo.setAttribute("class", "btn btn-danger");
            masinfo.innerHTML = "Más info";

            bookback.append(titulo, descripcion, masinfo);


            mylibro.append(newlibro);
            newlibro.append(bookfront);
            newlibro.append(bookback);

            sitiolibro.append(mylibro);
        }

    }


}).catch(function (error) {
    console.log("Request failed: " + error.message);
});
