const fs = require('fs');
const path = require('path');
const books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));

const controlador = {
    index: (req, res) => {
        res.render('index', {books});
    },

    productCart: (req, res) => {
        res.render('./products/productCart');
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail');
    },

    login: (req, res) => {
        res.render('./users/login');
    },

    register: (req, res) => {
        res.render('./users/register');
    },

    productCreate: (req, res) => {
        res.render('./products/admin-createProducts');
    },

    productEdit: (req, res) => {
        res.render('./products/admin-editProducts');
    }
}

module.exports = controlador;
