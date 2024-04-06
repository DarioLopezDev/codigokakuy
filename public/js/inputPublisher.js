//window.onload(() => {})
window.addEventListener('load', async() => {
    //Traigo el input de búsqueda
    const inputSearchPub = document.querySelector('#editorial');
    //Traigo el input oculto
    const inputHiddenPub = document.querySelector('#publisherHidden');

    //Traigo la lista de editoriales y la guardo en una variable
    let data;
    try {
        const response = await fetch('/products/allPublishers');
        data = await response.json();              
    } catch (error) {
        console.log(error.message);        
    }
    const editoriales = data.map(editorial => {
        return editorial.name;
    });

    inputSearchPub.addEventListener('input', () => {
        //Traigo la lista desordenada ul
        const suggestedWords = document.querySelector('#editoriales');

        //Limpio la lista desordenada de sugerencias
        suggestedWords.innerHTML = "";
        //Limpio el input oculto por si el usuario elige uno y luego escribe sobre este
        inputHiddenPub.value = "";

        //No sugerir nada si el inputSearchPub del buscador está vacio
        if (inputSearchPub.value.length === 0) return "";

        //Busco coincidencias con el array de lo escrito en el inputSearchPub
        const coincidencias = editoriales.filter((editorial) => {
            //Paso a minúscula tanto el valor del input como la lista de la data
            const editorialesMinus = editorial.toLocaleLowerCase();
            //Si hay coincidencia, lo retorno
            return editorialesMinus.includes(inputSearchPub.value.toLocaleLowerCase());
        });

        //Creo tantos <li> como coincidencias haya
        if (inputSearchPub.value.length) {
            coincidencias.forEach(coincidencia => {
                //Creo un <li>
                const newLi = document.createElement('li');
                //Agrego el texto
                newLi.innerText = coincidencia;
                //Le agrego un eventListener para que cuando se le haga click cambie el valor del input de búsqueda
                newLi.addEventListener('click', function () {
                    inputSearchPub.value = coincidencia;
                    //Busco los valores de la editorial en el array de objetos 
                    const publisherInfo = data.find(publisher => publisher.name == coincidencia);
                    //Le asigno el id al input oculto para que ese valor sea el que viaje por body
                    inputHiddenPub.value = publisherInfo.publisher_id;
                    //Limpio la lista de sugerencias
                    suggestedWords.innerHTML = "";
                });
                //Si es que hubo coincidencia lo agrego a la lista desordenada de sugerencias
                suggestedWords.appendChild(newLi);
            });
        }
    });
});