const db = require('../database/models');

/*const fs = require('fs');
const path = require('path');
let productsFilePath = path.join(__dirname, '../data/productos.json');
let books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));
*/

const productsController = {
    products: (req, res) => {
        db.Book.findAll()
            .then((books) => {
                res.render('./products/products.ejs', { books });
            })
            .catch(error => console.log(error));
    },

    productCart: (req, res) => {
        db.Book.findAll()
            .then((books) => {
                res.render('./products/productCart.ejs', { books });
            })
            .catch(error => console.log(error.message));

    },

    create: (req, res) => {
        res.render('./products/admin-createProducts.ejs');
    },

    store: (req, res) => {
        /*const newProduct = {
            id: Date.now(),
            ...req.body,
            image: `http://localhost:4050/images/books/${req.file?.filename || 'default-image.jpg'}`
        }
        books.push(newProduct);

        let productsJSON = JSON.stringify(books, null, ' ');
        fs.writeFileSync(productsFilePath, productsJSON);*/

        const newBook = {
            year: req.body.anio,
            title: req.body.titulo,
            author_id: req.body.autor,
            description: req.body.description,
            pages: req.body.cantidad_de_paginas,
            genre_id: req.body.genero,
            price: req.body.price,
            publisher_id: req.body.editorial,
            isbn: req.body.ISBN,
            stock: req.body.stock,
            image: `http://localhost:4050/images/books/${req.file?.filename || 'default-image.jpg'}`
        };
        db.Book.create(newBook);
        res.redirect('/products');
    },

    detail: (req, res) => {
        let idP = req.params.id;
        let books = db.Book.findAll();
        /*let book = books.find(book => book.id == idP);
        if (book) {
            return res.render('./products/productDetail.ejs', { book, books });
        }
        return res.send(`<h1>El Libro que buscas no existe</h1>
        <h3><a href="/">Volver al Home</a></h3>`);*/
        let book = db.Book.findByPk(idP);

        Promise.all([books, book])
            .then((books, book) => {
                if (!book) return res.send(`
            <h1>El Libro que buscas no existe</h1>
            <h3><a href="/">Volver al Home</a></h3>`
                );
                return res.render('./products/productDetail.ejs', { books, book });
            })
            .catch(error => console.log(error.message));
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

    update: (req, res) => {
        const idP = req.params.id;
        //const book = books.find(book => book.id == id);
        db.Book.update({
            year: req.body.anio,
            title: req.body.titulo,
            author_id: req.body.autor,
            description: req.body.description,
            pages: req.body.cantidad_de_paginas,
            genre_id: req.body.genero,
            price: req.body.price,
            publisher_id: req.body.editorial,
            isbn: req.body.ISBN,
            stock: req.body.stock,
            image: `http://localhost:4050/images/books/${req.file?.filename || 'default-image.jpg'}`

            //fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));
        }, {
            where: {
                id: idP
            }
        })
        res.redirect(`/products/${idP}`);

    },

    destroy: (req, res) => {
        const idP = req.params.id
        /*books = books.filter(book => book.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));*/
        db.Book.destroy({
            where: {
                id: idP
            }
        });
        res.redirect('/products');
    }
}

module.exports = productsController;
