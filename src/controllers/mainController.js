const fs = require('fs');
const path = require('path');
const books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));

const controlador = {
    index: (req, res) => {
        //console.log('Llega por body: ', req.body);
        //console.log('Llega por query: ', req.query);
        res.render('index', {books});
    }
}

module.exports = controlador;
