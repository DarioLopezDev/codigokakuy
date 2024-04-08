//window.onload(() => {})
window.addEventListener('load', async() => {
    //Traigo el input de búsqueda
    const inputSearch = document.querySelector('#entrada-busqueda-header');

    //Traigo la lista de libros y la guardo en una variable
    let data;
    try {
        const response = await fetch('/api/products');
        data = await response.json();         
    } catch (error) {
        console.log(error.message);        
    }
    const libros = data.products.map(libro => {
        return libro;
    });

    inputSearch.addEventListener('input', () => {
        //Traigo la lista desordenada ul
        const suggestedWords = document.querySelector('#libros');

        //Limpio la lista desordenada de sugerencias
        suggestedWords.innerHTML = "";

        //No sugerir nada si el inputSearch del buscador está vacio
        if (inputSearch.value.length === 0) return "";

        //Busco coincidencias con el array de lo escrito en el inputSearch
        const coincidencias = libros.filter((libro) => {
            //Paso a minúscula tanto el valor del input como la lista de la data
            const librosMinus = libro.title.toLocaleLowerCase();
            //Si hay coincidencia, lo retorno
            return librosMinus.includes(inputSearch.value.toLocaleLowerCase());
        });

        //Creo tantos <li> como coincidencias haya
        if (inputSearch.value.length) {
            coincidencias.forEach(coincidencia => {
                //Creo un <li>
                const newLi = document.createElement('li');
                //Agrego el texto
                newLi.innerText = coincidencia.title;
                //Le agrego un eventListener para que cuando se le haga click cambie el valor del input de búsqueda
                newLi.addEventListener('click', function () {
                    inputSearch.value = coincidencia.title;
                    //Limpio la lista de sugerencias
                    suggestedWords.innerHTML = "";
                });
                //Si es que hubo coincidencia lo agrego a la lista desordenada de sugerencias
                suggestedWords.appendChild(newLi);
            });
        }
    });
});