//window.onload(() => {})
window.addEventListener('load', async() => {
    //Traigo el input de búsqueda
    const inputSearch = document.querySelector('#autor');
    //Traigo el input oculto
    const inputHidden = document.querySelector('#authorHidden');

    //Traigo la lista de autores y la guardo en una variable
    let data;
    try {
        const response = await fetch('/products/allAuthors');
        data = await response.json();              
    } catch (error) {
        console.log(error.message);        
    }
    const autores = data.map(autor => {
        return autor.fullname;
    });

    inputSearch.addEventListener('input', () => {
        //Traigo la lista desordenada ul
        const suggestedWords = document.querySelector('#autores');

        //Limpio la lista desordenada de sugerencias
        suggestedWords.innerHTML = "";
        //Limpio el input oculto por si el usuario elige uno y luego escribe sobre este
        inputHidden.value = "";

        //No sugerir nada si el inputSearch del buscador está vacio
        if (inputSearch.value.length === 0) return "";

        //Busco coincidencias con el array de lo escrito en el inputSearch
        const coincidencias = autores.filter((autor) => {
            //Paso a minúscula tanto el valor del input como la lista de la data
            const autoresMinus = autor.toLocaleLowerCase();
            //Si hay coincidencia, lo retorno
            return autoresMinus.includes(inputSearch.value.toLocaleLowerCase());
        });

        //Creo tantos <li> como coincidencias haya
        if (inputSearch.value.length) {
            coincidencias.forEach(coincidencia => {
                //Creo un <li>
                const newLi = document.createElement('li');
                //Agrego el texto
                newLi.innerText = coincidencia;
                //Le agrego un eventListener para que cuando se le haga click cambie el valor del input de búsqueda
                newLi.addEventListener('click', function () {
                    inputSearch.value = coincidencia;
                    //Busco los valores de la editorial en el array de objetos 
                    const authorInfo = data.find(autor => autor.fullname == coincidencia);
                    //Le asigno el id al input oculto para que ese valor sea el que viaje por body
                    inputHidden.value = authorInfo.author_id;
                    //Limpio la lista de sugerencias
                    suggestedWords.innerHTML = "";
                });
                //Si es que hubo coincidencia lo agrego a la lista desordenada de sugerencias
                suggestedWords.appendChild(newLi);
            });
        }
    });
});