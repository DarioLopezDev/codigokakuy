const db = require('../database/models');

/*const fs = require('fs');
const path = require('path');
const books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));
*/

const controlador = {
    index: async (req, res) => {
        try {
            const books = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ]
            });

            const lastBooks = [
                books[books.length - 1].dataValues, 
                books[books.length - 2].dataValues,
                books[books.length - 3].dataValues,
                books[books.length - 4].dataValues,
                books[books.length - 5].dataValues
            ];
        
            res.render('index', {books, lastBooks});

        } catch (error) {
            console.log(error.message); 
        }
    }
}

module.exports = controlador;
