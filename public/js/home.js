window.addEventListener('load', () => {
    //Traigo el contenedor de imágenes y c/u de los puntos
    const booksContainer = document.querySelector('.books-container');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    /*
    const allPoint = document.querySelectorAll('.dot');

    //Recorro c/u de los puntos
    allPoint.forEach((punto, index) => {
        //Le agrego el evento click
        allPoint[index].addEventListener('click', () => {
            //Guardo la posición
            let position = index;
            //Calculo el valor de desplazamiento X que tendrá
            let traslateXValue = position * -20;
            //Le cambio el valor de transform correspondiente
            imgContainer.style.transform = `translateX(${traslateXValue}%)`; 

          //Cambio de color del punto seleccionado
            //Elimino la clase 'active' de todos los puntos
            allPoint.forEach((punto, index) => {
                allPoint[index].classList.remove('active');
            });
            //Agrego la clase 'active' al punto actual
            allPoint[index].classList.add('active');

        });
    });   
    */

    //Consulto el valor de la traslación en X del contenedor de libros
    let elementStyle = window.getComputedStyle(booksContainer);
    console.log(elementStyle);
    let translateValue = elementStyle.getPropertyValue('transform');
    console.log(translateValue);
    

    left.addEventListener('click', () => {
        //Consulto el valor de la traslación en X del contenedor de libros
        let elementStyle = window.getComputedStyle(booksContainer);
        let translateValue = elementStyle.getPropertyValue('transform');
        console.log(translateValue);
        //Calculo el valor de desplazamiento X que tendrá
        let traslateXValue = position * 20;
        //Le cambio el valor de transform correspondiente
        booksContainer.style.transform = `translateX(${traslateXValue}%)`;
    });

}); 