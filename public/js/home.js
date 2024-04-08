window.addEventListener('load', () => {
    //Traigo el contenedor de imágenes y los puntos
    const booksContainer = document.querySelector('.books-container');
    const left = document.querySelector('.left');
    let count = 1;
    const right = document.querySelector('.right');

    left.addEventListener('click', () => {
        count++;
        //Le cambio el valor de transform correspondiente
        booksContainer.style.transform = `matrix(1, 0, 0, 1, ${count * 150}, 0)`;
    });
    
    right.addEventListener('click', () => {
        count--;
        if (count === 0) {
            count = -1;            
        }
        //Le cambio el valor de transform correspondiente
        booksContainer.style.transform = `matrix(1, 0, 0, 1, ${count * 150}, 0)`;
    });


    const actionBooksContainer = document.querySelector('.action-books-container');
    const leftAction = document.querySelector('.left-action');
    let countAction = 1;
    const rightAction = document.querySelector('.right-action');

    leftAction.addEventListener('click', () => {
        countAction++;
        //Le cambio el valor de transform correspondiente
        actionBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countAction * 150}, 0)`;
    });
    
    rightAction.addEventListener('click', () => {
        countAction--;
        if (countAction === 0) {
            countAction = -1;            
        }
        //Le cambio el valor de transform correspondiente
        actionBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countAction * 150}, 0)`;
    });

    const scifiBooksContainer = document.querySelector('.scifi-books-container');
    const leftScifi = document.querySelector('.left-scifi');
    let countScifi = 1;
    const rightScifi = document.querySelector('.right-scifi');

    leftScifi.addEventListener('click', () => {
        countScifi++;
        //Le cambio el valor de transform correspondiente
        scifiBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countScifi * 150}, 0)`;
    });
    
    rightScifi.addEventListener('click', () => {
        countScifi--;
        if (countScifi === 0) {
            countScifi = -1;            
        }
        //Le cambio el valor de transform correspondiente
        scifiBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countScifi * 150}, 0)`;
    });
    
    const dramaBooksContainer = document.querySelector('.drama-books-container');
    const leftDrama = document.querySelector('.left-drama');
    let countDrama = 1;
    const rightDrama = document.querySelector('.right-drama');

    leftDrama.addEventListener('click', () => {
        countDrama++;
        //Le cambio el valor de transform correspondiente
        dramaBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countDrama * 150}, 0)`;
    });
    
    rightDrama.addEventListener('click', () => {
        countDrama--;
        if (countDrama === 0) {
            countDrama = -1;            
        }
        //Le cambio el valor de transform correspondiente
        dramaBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countDrama * 150}, 0)`;
    });

    const economyBooksContainer = document.querySelector('.economy-books-container');
    const leftEconomy = document.querySelector('.left-economy');
    let countEconomy = 1;
    const rightEconomy = document.querySelector('.right-economy');

    leftEconomy.addEventListener('click', () => {
        countEconomy++;
        //Le cambio el valor de transform correspondiente
        economyBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countEconomy * 150}, 0)`;
    });
    
    rightEconomy.addEventListener('click', () => {
        countEconomy--;
        if (countEconomy === 0) {
            countEconomy = -1;            
        }
        //Le cambio el valor de transform correspondiente
        economyBooksContainer.style.transform = `matrix(1, 0, 0, 1, ${countEconomy * 150}, 0)`;
    });
}); 