//window.onload(() => {})
window.addEventListener('load', () => {
    const form = document.querySelector('#formularioLoginBox');
    const spans = document.querySelectorAll('span');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        let errorFlag = true;

        //Email
        if (form.email.value.length <= 0) {
            spans[0].innerHTML = "Tienes que escribir un Email";
            spans[0].id = "errors";
            errorFlag = false;
        } else {
            try {
                const response = await fetch(`/users/isEmailExist/${form.email.value}`);
                const data = await response.json();
                if (!data) {
                    spans[0].innerHTML = "Este Email no está registrado";
                    spans[0].id = "errors";
                    errorFlag = false;
                }
            } catch (error) {
                console.log(error);
            }
        };

        //Contraseña
        if (form.contrasena.value.length <= 0) {
            spans[1].innerHTML = "Tienes que escribir una Contraseña";
            spans[1].id = "errors";
            errorFlag = false;
        };

        if (errorFlag) {
            form.submit();            
        }

    });

    //Email
    form.email.addEventListener('input', (event) => {
        let expReg = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if (!expReg.test(event.target.value)) {
            spans[0].innerHTML = "Tu Email debe ser válido";
            spans[0].id = "errors";
        } else {
            spans[0].innerHTML = "";
            spans[0].removeAttribute("id");
        }
    });

    //Contraseña

});