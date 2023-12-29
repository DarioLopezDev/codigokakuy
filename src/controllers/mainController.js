const fs = require('fs');
const path = require('path');
const books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));

const controlador = {
    index: (req, res) => {
        res.render('index', {books});
    },

    login: (req, res) => {
        res.render('./users/login');
    },

    register: (req, res) => {
        res.render('./users/register');
    }
}

module.exports = controlador;
