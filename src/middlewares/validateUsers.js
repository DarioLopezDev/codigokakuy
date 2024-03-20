const { body } = require('express-validator'); 
// o También const {check} = require('express-validator'); 
const path = require('path');
const db = require('../database/models');


let validations = [
    //Nombre y Apellido
    body('nombreApellido')
    .notEmpty().withMessage('Tienes que escribir un Nombre y Apellido').bail()
    .isLength({min: 2}).withMessage('Tu Nombre y Apellido es demasiado corto'),

    //Nombre de usuario
    body('nombreUsuario')
    .notEmpty().withMessage('Tienes que escribir un Nombre de usuario').bail()
    .isLength({min: 2}).withMessage('Tu Nombre de usuario es demasiado corto'),

    //Email
    body('email')
    .notEmpty().withMessage('Tienes que escribir un Email').bail()
    .isEmail().withMessage('Tienes que escribir un Email válido')
    .custom(async (value, { req }) => {
        const existingUser = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
         if (existingUser) {
           // Will use the below as the error message
           throw new Error('Ya existe un usuario con este email');
         }
      }),

    //Fecha de Nacimiento
    body('date')
    .notEmpty().bail().withMessage('Tienes que elegir una Fecha de Nacimiento'),

    //Domicilio
    body('domicilio')
    .notEmpty().withMessage('Tienes que escribir un Domicilio').bail()
    .isLength({min: 2}).withMessage('Tu Domicilio es demasiado corto'),

    //Foto de perfil
    body('foto').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtension = ['.jpg', '.jpeg', '.png', '.gif'];
        let fileExtension = path.extname(file.originalname);

        if(file && !acceptedExtension.includes(fileExtension)) {
            throw new Error(
                'Extensión de archivo no soportado, use archivos JPG, JPEG, PNG o GIF'
                );
        };

    }),

    //Contraseña
    body('contrasena')
    .notEmpty().withMessage('Tienes que escribir una Contraseña').bail()
    .isLength({min: 8}).withMessage('Tu Contraseña es demasiado corta, debería tener al menos 8 caracteres').bail()
    .isStrongPassword(
        {
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }
    ).withMessage('Tu Contraseña debe tener por lo menos 1 minúscula, 1 mayúscula, 1 número y 1 símbolo'),

    //Confirmar contraseña
    body('confirmarContrasena')
    .notEmpty().withMessage('Tu confirmación debe ser igual a la Contraseña')
];

module.exports = validations;