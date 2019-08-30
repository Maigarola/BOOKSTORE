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
    libros(books);
    document.getElementById("bsearch").addEventListener("click", () => myfilter(books));
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
            bookback.setAttribute("class", "flip-card-back"); //asignamos la class para que gire

            let titulo = document.createElement("h5");
            let descripcion = document.createElement("p");
            let masinfo = document.createElement("a");
            titulo.innerHTML = datos[i].title;
            descripcion.innerHTML = datos[i].description;
            masinfo.setAttribute("class", "btn btn-danger");
            masinfo.innerHTML = "Más info";

            masinfo.setAttribute("data-fancybox", "gallery");
            masinfo.setAttribute("href", datos[i].detail);

            bookback.append(titulo, descripcion, masinfo);

            mylibro.append(newlibro);
            newlibro.append(bookfront);
            newlibro.append(bookback);

            sitiolibro.append(mylibro);
        }

    }
    function myfilter() {
        document.getElementById("libro").innerHTML = "";
        let bfiltered = [];
        let s = document.getElementById("tsearch").value;

        for (let i = 0; i < books.length; i++) {
            if (books[i].title.includes(s) || books[i].description.includes(s)) {
                bfiltered.push(books[i]);
            }
        }
        if (bfiltered.length == 0) {
            document.getElementById("libro").innerHTML = "NO FILTERED CRITERIA";
        }
        else { libros(bfiltered); }

    }
}).catch(function (error) {
    console.log("Request failed: " + error.message);
});
