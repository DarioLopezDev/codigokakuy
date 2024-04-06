const db = require('../database/models');
const { validationResult } = require('express-validator');

/*const fs = require('fs');
const path = require('path');
let productsFilePath = path.join(__dirname, '../data/productos.json');
let books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));
*/

const productsController = {
    products: (req, res) => {
        db.Book.findAll({
            include: [
                { association: 'author' },
                { association: 'genre' },
                { association: 'publisher' }
            ]
        })
            .then((books) => {
                res.render('./products/products.ejs', { books });
            })
            .catch(error => console.log(error));
    },

    productCart: (req, res) => {
        db.Book.findAll({
            include: [
                { association: 'author' },
                { association: 'genre' },
                { association: 'publisher' }
            ]
        })
            .then((books) => {
                res.render('./products/productCart.ejs', { books });
            })
            .catch(error => console.log(error.message));

    },

    create: async (req, res) => {
        try {
            const genres = await db.Genre.findAll();
            const publishers = await db.Publisher.findAll();
            const authors = await db.Author.findAll();
            res.render('./products/admin-createProducts.ejs', { genres, publishers, authors });
        } catch (error) {
            console.log(error.message);
        }
    },

    store: async (req, res) => {
    //Validaciones
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            const genres = await db.Genre.findAll();
            return res.render('./products/admin-createProducts.ejs', {
                errors: resultValidation.mapped(), //Convierte el array en un objeto literal
                oldData: req.body, //Conserva lo ingresado por el usuario en el formulario 
                genres: genres //Envío todos los géneros
            });
        };

    //Adaptando al Autor que llega por body
        //Función constructora de autores
        const authorCreator = async (fullname) => {
            try {
                const ultimoElemento = await db.Author.findOne({
                    order: [['author_id', 'DESC']]
                });
                const authorInfo = { author_id: ultimoElemento.author_id + 1, fullname };
                const newAuthor = await db.Author.create(authorInfo);
                return newAuthor.author_id;
            } catch (error) {
                console.log(error.message);
            }
        };

        let author_id = req.body.authorHidden;

        if (!author_id) {
            author_id = await authorCreator(req.body.autor);
        }

    //Adaptando a la Editorial que viene por body
        //Función constructora de editoriales
        const publisherCreator = async (name) => {
            try {
                const ultimoElemento = await db.Publisher.findOne({
                    order: [['publisher_id', 'DESC']]
                });
                const publisherInfo = { publisher_id: ultimoElemento.publisher_id + 1, name };
                const newPublisher = await db.Publisher.create(publisherInfo);
                return newPublisher.publisher_id;
            } catch (error) {
                console.log(error.message);
            }
        };

        let publisher_id = req.body.publisherHidden;

        if (!publisher_id) {
            publisher_id = await publisherCreator(req.body.editorial);
        }

        const newBook = {
            year: req.body.anio,
            title: req.body.titulo,
            author_id,
            description: req.body.description,
            pages: req.body.cantidad_de_paginas,
            genre_id: req.body.genero,
            price: req.body.price,
            publisher_id,
            isbn: req.body.ISBN,
            stock: req.body.stock,
            image: `${req.file?.filename || 'default-image.jpg'}`
        };

        db.Book.create(newBook)

        res.redirect('/products')

    },

    detail: async (req, res) => {
        try {
            let idP = req.params.id;
            const book = await db.Book.findByPk(idP, {
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ]
            });
            const books = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ]
            });
            res.render('./products/productDetail.ejs', { book, books });
        } catch (error) {
            console.log(error.message)
        }
    },

    edit: (req, res) => {
        let idP = req.params.id;
        //let book = books.find(book => book.id == id);
        db.Book.findByPk(idP)
            .then((book) => {
                if (!book) return res.send(`
            <h1>El Libro no existe</h1>
            <h3><a href="/">Volver al Home</a></h3>`
                );
                res.render('./products/admin-editProducts.ejs', { book });
            })
            .catch(error => console.log(error.message));
    },

    update: async (req, res) => {
        try {
            const idP = req.params.id;
            //const book = books.find(book => book.id == id);
            const book = await db.Book.findByPk(idP);

            db.Book.update({
                year: req.body.anio || book.year,
                title: req.body.titulo || book.title,
                author_id: req.body.autor || book.author_id,
                description: req.body.description || book.description,
                pages: req.body.cantidad_de_paginas || book.pages,
                genre_id: req.body.genero || book.genre_id,
                price: req.body.price || book.price,
                publisher_id: req.body.editorial || book.publisher_id,
                isbn: req.body.ISBN || book.isbn,
                stock: req.body.stock || book.stock,
                image: `${req.file?.filename || book.image}`

                //fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));
            }, {
                where: {
                    book_id: idP
                }
            })

            res.redirect(`/products/${idP}`);

        } catch (error) {
            console.log(error.message);
        }

    },

    destroy: (req, res) => {
        const idP = req.params.id
        /*books = books.filter(book => book.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));*/
        db.Book.destroy({
            where: {
                book_id: idP
            }
        });
        res.redirect('/products');
    },

    allAuthors: async (req, res) => {
        try {
            const authors = await db.Author.findAll();
            res.json(authors);

        } catch (error) {
            console.log(error.message);
        }
    },

    allPublishers: async (req, res) => {
        try {
            const publishers = await db.Publisher.findAll();
            res.json(publishers);

        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = productsController;