const { body } = require('express-validator'); 
// o También const {check} = require('express-validator'); 
const path = require('path');
const db = require('../database/models');


let validations = [
    //Título
    body('titulo')
    .notEmpty().withMessage('Tienes que escribir un Título').bail()
    .isLength({min: 5}).withMessage('Tu Título es demasiado corto'),

    //Año
    body('anio')
    .notEmpty().withMessage('Tienes que escribir un Año').bail()
    .isLength({min: 4}).withMessage('Ingresa un Año válido'),

    //Autor
    body('autor')
    .notEmpty().withMessage('Tienes que incluir un Autor').bail()
    /*.custom(async (value, { req }) => {
        const existingUser = await db.Book.findOne({
            where: {
                author_id: req.body.autor
            }
        });
         if (existingUser) {
           // Will use the below as the error message
           throw new Error('Ya existe un usuario con este email');
         }
      })*/,

    //Descripción
    body('description')
    .notEmpty().withMessage('Tienes que escribir una Descripción').bail()
    .isLength({min: 20}).withMessage('Tu Descripción es demasiado corta'),

    //Género
    body('genero')
    .notEmpty().withMessage('Tienes que incluir un Género').bail(),

    //Cantidad de páginas
    body('cantidad_de_paginas')
    .notEmpty().withMessage('Tienes que escribir la Cantidad de páginas del libro'),

    //Precio
    body('price')
    .notEmpty().withMessage('Tienes que escribir el Precio'),

    //Editorial
    body('editorial')
    .notEmpty().withMessage('Tienes que incluir una Editorial'),

    //ISBN
    body('ISBN')
    .notEmpty().withMessage('Tienes que escribir un International Standard Book Number (ISBN)').bail()
    .isLength({min: 13}).withMessage('Tu International Standard Book Number (ISBN) es demasiado corto'),

    //Stock
    body('stock')
    .notEmpty().withMessage('Tienes que escribir un número de Stock'),

    //Imagen
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
];

module.exports = validations;