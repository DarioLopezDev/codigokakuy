//window.onload(() => {})
window.addEventListener('load', () => {
    const form = document.querySelector('#formularioCrearProductoBox');
    const spans = document.querySelectorAll('span');

    const formatImgChecker = (inputImg) => {
        let checkFlag = false;
        const supportedFormats = ["jpg", "jpeg", "png", "gif"];
        let typeImg = inputImg.files[0].type.slice(6);
        supportedFormats.forEach(supportedFormat => { supportedFormat === typeImg ? checkFlag = true : "" });
        return checkFlag;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errorFlag = true;

        //Título
        if (form.titulo.value.length <= 0) {
            spans[0].innerHTML = "Tienes que escribir un Título";
            spans[0].id = "errors";
            errorFlag = false;
        };

        //Año
        if (form.anio.value.length <= 0) {
            spans[1].innerHTML = "Tienes que escribir un Año";
            spans[1].id = "errors";
            errorFlag = false;
        };

        //Autor
        if (form.autor.value.length <= 0) {
            spans[2].innerHTML = "Tienes que incluir un Autor";
            spans[2].id = "errors";
            errorFlag = false;
        };

        //Descripción
        if (form.description.value.length <= 0) {
            spans[3].innerHTML = "Tienes que escribir una Descripción";
            spans[3].id = "errors";
            errorFlag = false;
        };

        //Género
        if (form.genero.value.length <= 0) {
            spans[4].innerHTML = "Tienes que incluir un Género";
            spans[4].id = "errors";
            errorFlag = false;
        };

        //Cantidad de páginas
        if (form.cantidad_de_paginas.value.length <= 0) {
            spans[5].innerHTML = "Tienes que escribir la Cantidad de páginas del libro";
            spans[5].id = "errors";
            errorFlag = false;
        };

        //Precio
        if (form.price.value.length <= 0) {
            spans[6].innerHTML = "Tienes que escribir el Precio";
            spans[6].id = "errors";
            errorFlag = false;
        };

        //Editorial
        if (form.editorial.value.length <= 0) {
            spans[7].innerHTML = "Tienes que incluir una Editorial";
            spans[7].id = "errors";
            errorFlag = false;
        };

        //ISBN
        if (form.ISBN.value.length < 13) {
            spans[8].innerHTML = "Tienes que escribir un International Standard Book Number (ISBN)";
            spans[8].id = "errors";
            errorFlag = false;
        };

        //Stock
        if (form.editorial.value.length <= 0) {
            spans[9].innerHTML = "Tienes que escribir un número de Stock";
            spans[9].id = "errors";
            errorFlag = false;
        };

        if (errorFlag) {
            form.submit();            
        }

    });

    //Título
    form.titulo.addEventListener('input', (event) => {
        if (event.target.value.length < 5) {
            spans[0].innerHTML = "Tu Título es demasiado corto";
            spans[0].id = "errors";
        } else {
            spans[0].innerHTML = "";
            spans[0].removeAttribute("id");
        }
    });

    //Año
    form.anio.addEventListener('input', (event) => {
        if (event.target.value.length !== 4) {
            spans[1].innerHTML = "Ingresa un Año válido";
            spans[1].id = "errors";
        } else {
            spans[1].innerHTML = "";
            spans[1].removeAttribute("id");
        }
    });

    //Autor
    form.autor.addEventListener('input', (event) => {
        if (event.target.value.length < 1) {
            spans[2].innerHTML = "El nombre del Autor es demasiado corto";
            spans[2].id = "errors";
        } else {
            spans[2].innerHTML = "";
            spans[2].removeAttribute("id");
        }
    });

    //Descripción
    form.description.addEventListener('input', (event) => {
        if (event.target.value.length < 20) {
            spans[3].innerHTML = "Tu Descripción es demasiado corta";
            spans[3].id = "errors";
        } else {
            spans[3].innerHTML = "";
            spans[3].removeAttribute("id");
        }
    });

    //Género
    form.genero.addEventListener('input', (event) => {
        if (event.target.value.length < 1) {
            spans[4].innerHTML = "Debes elegir un Género";
            spans[4].id = "errors";
        } else {
            spans[4].innerHTML = "";
            spans[4].removeAttribute("id");
        }
    });
    
    //Cantidad de páginas
    form.cantidad_de_paginas.addEventListener('input', (event) => {
        if (event.target.value < 25) {
            spans[5].innerHTML = "La Cantidad de Páginas son demasiado pocas";
            spans[5].id = "errors";
        } else {
            spans[5].innerHTML = "";
            spans[5].removeAttribute("id");
        }
    });

    //Precio
    form.price.addEventListener('input', (event) => {
        if (event.target.value < 1) {
            spans[6].innerHTML = "El Precio es demasiado bajo";
            spans[6].id = "errors";
        } else {
            spans[6].innerHTML = "";
            spans[6].removeAttribute("id");
        }
    });

    //Editorial
    form.editorial.addEventListener('input', (event) => {
        if (event.target.value.length < 1) {
            spans[7].innerHTML = "El nombre de la Editorial es demasiado corta";
            spans[7].id = "errors";
        } else {
            spans[7].innerHTML = "";
            spans[7].removeAttribute("id");
        }
    });

    //ISBN
    form.ISBN.addEventListener('input', (event) => {
        if (event.target.value.length < 13) {
            spans[8].innerHTML = "Tu International Standard Book Number (ISBN) es demasiado corto";
            spans[8].id = "errors";
        } else {
            spans[8].innerHTML = "";
            spans[8].removeAttribute("id");
        }
    });

    //Stock
    form.stock.addEventListener('input', (event) => {
        if (event.target.value < 1) {
            spans[9].innerHTML = "El número de Stock es demasiado bajo";
            spans[9].id = "errors";
        } else {
            spans[9].innerHTML = "";
            spans[9].removeAttribute("id");
        }
    });
    

    //Imagen del Producto
    form.imagenProducto.addEventListener('change', () => {
        spans[10].innerHTML = "";
        spans[10].removeAttribute("id");
        if (imagenProducto.files.length > 0) {
            if (!formatImgChecker(imagenProducto)) {
                spans[10].innerHTML = "Extensión de archivo no soportado, use archivos JPG, JPEG, PNG o GIF";
                spans[10].id = "errors";
            }
        } 
    });

});