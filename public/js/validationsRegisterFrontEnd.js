//window.onload(() => {})
window.addEventListener('load', () => {
    const form = document.querySelector('#formularioRegistroBox');
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

        //Nombre y Apellido
        if (form.nombreApellido.value.length <= 0) {
            spans[0].innerHTML = "Tienes que escribir un Nombre y Apellido";
            spans[0].id = "errors";
        };

        //Nombre de Usuario
        if (form.nombreUsuario.value.length <= 0) {
            spans[1].innerHTML = "Tienes que escribir un Nombre de Usuario";
            spans[1].id = "errors";
        };

        //Email
        if (form.email.value.length <= 0) {
            spans[2].innerHTML = "Tienes que escribir un Email";
            spans[2].id = "errors";
        } else {
            try {
                const response = await fetch(`/users/isEmailExist/${form.email.value}`);
                const data = await response.json();
                if (data) {
                    spans[2].innerHTML = "Ya existe un usuario con este Email";
                    spans[2].id = "errors";
                }
            } catch (error) {
                console.log(error);
            }
        };

        //Fecha de nacimiento
        if (form.fechaNacimiento.value.length <= 0) {
            spans[3].innerHTML = "Tienes que elegir una Fecha de Nacimiento";
            spans[3].id = "errors";
        };

        //Domicilio
        if (form.domicilio.value.length <= 0) {
            spans[4].innerHTML = "Tienes que escribir un Domicilio";
            spans[4].id = "errors";
        };

        //Contraseña
        if (form.contrasena.value.length <= 0) {
            spans[6].innerHTML = "Tienes que escribir una Contraseña";
            spans[6].id = "errors";
        };

        //Confirmar Contraseña
        if (form.confirmarContrasena.value.length <= 0) {
            spans[7].innerHTML = "Tienes que Confirmar tu Contraseña";
            spans[7].id = "errors";
        };

        //Aceptar los terminos y Servicios
        if (!form.terminosServicios.checked) {
            spans[8].innerHTML = "Tienes que Aceptar los terminos y Servicios";
            spans[8].id = "errors";
        };
    });

    //Nombre y Apellido
    form.nombreApellido.addEventListener('input', (event) => {
        /*if (event.target.value.length <= 0) {
            spans[0].innerHTML = "Tienes que escribir un Nombre y Apellido";
            spans[0].id = "errors";
        } else*/ if (event.target.value.length < 2) {
            spans[0].innerHTML = "Tu Nombre y Apellido son demasiado cortos";
            spans[0].id = "errors";
        } else {
            spans[0].innerHTML = "";
            spans[0].removeAttribute("id");
        }
    });

    //Nombre de Usuario
    form.nombreUsuario.addEventListener('input', (event) => {
        if (event.target.value.length < 2) {
            spans[1].innerHTML = "Tu Nombre de Usuario es demasiado corto";
            spans[1].id = "errors";
        } else {
            spans[1].innerHTML = "";
            spans[1].removeAttribute("id");
        }
    });

    //Email
    form.email.addEventListener('input', (event) => {
        let expReg = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if (!expReg.test(event.target.value)) {
            spans[2].innerHTML = "Tu Email debe ser válido";
            spans[2].id = "errors";
        } else {
            spans[2].innerHTML = "";
            spans[2].removeAttribute("id");
        }
    });

    //Domicilio
    form.domicilio.addEventListener('input', (event) => {
        if (event.target.value.length < 8) {
            spans[4].innerHTML = "Tu Domicilio es demasiado corto";
            spans[4].id = "errors";
        } else {
            spans[4].innerHTML = "";
            spans[4].removeAttribute("id");
        }
    });

    //Foto de Usuario
    form.foto.addEventListener('change', () => {
        spans[5].innerHTML = "";
        spans[5].removeAttribute("id");
        if (foto.files.length > 0) {
            if (!formatImgChecker(foto)) {
                spans[5].innerHTML = "Extensión de archivo no soportado, use archivos JPG, JPEG, PNG o GIF";
                spans[5].id = "errors";
            }
        } 
    });

    //Contraseña
    form.contrasena.addEventListener('input', (event) => {
        let expReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[:;.,_#?!@$ %^&*-]).{8,}$/;
        if (!expReg.test(event.target.value)) {
            spans[6].innerHTML = "Tu Contraseña debe tener 8 caracteres y por lo menos 1 minúscula, 1 mayúscula, 1 número y 1 símbolo";
            spans[6].id = "errors";
        } else {
            spans[6].innerHTML = "";
            spans[6].removeAttribute("id");
        }
    });

    //Confirmar Contraseña
    form.confirmarContrasena.addEventListener('input', (event) => {
        if (!(event.target.value === form.contrasena.value)) {
            spans[7].innerHTML = "Tu Confirmación de Contraseña tiene que ser igual a tu Contraseña";
            spans[7].id = "errors";
        } else {
            spans[7].innerHTML = "";
            spans[7].removeAttribute("id");
        }
    });

});