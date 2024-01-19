const fs = require('fs');
const path = require('path');
let productsFilePath = path.join(__dirname, '../data/productos.json');
let books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));

const productsController = {
    products: (req, res) => {
        res.render('./products/products.ejs', { books });
    },

    productCart: (req, res) => {
        res.render('./products/productCart.ejs', { books });
    },

    create: (req, res) => {
        res.render('./products/admin-createProducts.ejs');
    },

    store: (req, res) => {
        const newProduct = {
            id: Date.now(),
            ...req.body,
            image: `http://localhost:4050/images/books/${req.file?.filename || 'default-image.jpg'}`
        }
        books.push(newProduct);

        let productsJSON = JSON.stringify(books, null, ' ');
        fs.writeFileSync(productsFilePath, productsJSON);

        res.redirect('/products');
    },

    detail: (req, res) => {
        let idP = req.params.id;
        let book = books.find(book => book.id == idP);
        if (book) {
            return res.render('./products/productDetail.ejs', { book, books });
        }
        return res.send(`<h1>El Libro que buscas no existe</h1>
        <h3><a href="/">Volver al Home</a></h3>`);
    },

    edit: (req, res) => {
        let id = req.params.id;
        let book = books.find(book => book.id == id);
        res.render('./products/admin-editProducts.ejs', { book });
    },

    update: (req, res) => {
        const id = req.params.id;
        const book = books.find(book => book.id == id);
        if (book) {
            book.name = req.body.name || book.name
            book.anio = req.body.anio || book.anio
            book.titulo = req.body.titulo || book.titulo
            book.autor = req.body.autor || book.autor
            book.description = req.body.description || book.description
            book.cantidad_de_paginas = req.body.cantidad_de_paginas || book.cantidad_de_paginas
            book.genero = req.body.genero || book.genero
            book.price = req.body.price || book.price
            book.editorial = req.body.editorial || book.editorial
            book.ISBN = req.body.ISBN || book.ISBN
            book.image = `http://localhost:4050/images/books/${req.file?.filename}` || book.image
            book.discount = req.body.discount || book.discount

            fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));
            res.redirect(`/products/${id}`);
        }
    },

    destroy: (req, res) => {
        const id = req.params.id
        books = books.filter(book => book.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(books, null, ' '));
        res.redirect('/products');
    }
}

module.exports = productsController;
