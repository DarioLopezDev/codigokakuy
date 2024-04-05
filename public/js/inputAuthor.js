//window.onload(() => {})
window.addEventListener('load', async() => {
    //Traigo el input de búsqueda
    const inputSearch = document.querySelector('#autor');
    const inputHidden = document.querySelector('#authorHidden');

    //Traigo la lista de autores
    let data;
    try {
        const response = await fetch('/products/cachifrula');
        data = await response.json();              
    } catch (error) {
        console.log(error.message);        
    }

    const autores = data.map(autor => {
        return autor.fullname;
    });

    inputSearch.addEventListener('input', () => {
        //Traigo la lista desordenada ul
        const suggestedWords = document.querySelector('#sugerencias');

        //Limpio la lista desordenada de sugerencias
        suggestedWords.innerHTML = "";
        inputHidden.value = "";

        //No sugerir nada si el inputSearch del buscador está vacio
        if (inputSearch.value.length === 0) return "";

        //Busco coincidencias con el array de lo escrito en el inputSearch
        const coincidencias = autores.filter((autor) => {
            const autoresMinus = autor.toLocaleLowerCase();
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
                    //asdas
                    const authorInfo = data.find(autor => autor.fullname == coincidencia);
                    inputHidden.value = authorInfo.author_id;
                    suggestedWords.innerHTML = "";
                });
                //Lo agrego a la lista desordenada de sugerencias
                suggestedWords.appendChild(newLi);
            });
        }
    });
});