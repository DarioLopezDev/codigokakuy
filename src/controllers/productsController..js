const fs = require('fs');
const path = require('path');

const books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    index: (req, res) => {
        res.render('product.ejs', { products: products })
    },
    detail: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        if (product) {
            return res.render('productDetail.ejs', { product })
        }
        return res.send('El producto que buscas no existe')
    },
    create: (req, res) => {
        res.render('admin-createProducts.ejs')
    },
    store: (req, res) => {
        const newProduct = {
            id: Date.now(),
            ...req.body,
            image: `http://localhost:4050/images/books/${req.file?.filename || 'default-image.jpg'}`
        }
        products.push(newProduct)

        let productsJSON = JSON.stringify(products, null, ' ')
        fs.writeFileSync(productsFilePath, productsJSON)

        res.redirect('/productCart')
    },
    edit: (req, res) => {
        let id = req.params.id
        let product = products.find(product => product.id == id)
        res.render('admin-editProducts.ejs', { product })
    },
    update: (req, res) => {
        const id = req.params.id
        const product = products.find(product => product.id == id)
        if (product) {
            product.name = req.body.name || product.name
            product.año = req.body.año || product.año
            product.titulo = req.body.titulo || product.titulo
            product.autor = req.body.autor || product.autor
            product.description = req.body.description || product.description
            product.cantidad_de_paginas = req.body.cantidad_de_paginas || product.cantidad_de_paginas
            product.genero = req.body.genero || product.genero
            product.price = req.body.price || product.price
            product.editorial = req.body.editorial || product.editorial
            product.ISBN = req.body.ISBN || product.ISBN
            product.image = req.body.image || product.image
            product.discount = req.body.discount || product.discount

            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
            res.redirect('/productCart')
        }
    },
    destroy: (req, res) => {
        const id = req.params.id
        products = products.filter(product => product.id != id)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))
        res.redirect('/productCart')
    }
}

module.exports = productsController;
