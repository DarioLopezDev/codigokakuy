const { body } = require('express-validator'); 
// o También const {check} = require('express-validator'); 
const path = require('path');
const db = require('../database/models');


let validationsLogin = [
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
           throw new Error('Ya existe un usuario con este Email');
         }
      }),

    //Contraseña
    body('contrasena')
    .notEmpty().withMessage('Tienes que escribir una Contraseña').bail()
    .isLength({min: 8}).withMessage('Tu Contraseña es demasiado corta, debería tener al menos 8 caracteres').bail()
    .isStrongPassword({
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }
    ).withMessage('Tu Contraseña debe tener por lo menos 1 minúscula, 1 mayúscula, 1 número y 1 símbolo')
];

module.exports = validationsLogin;