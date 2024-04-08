const db = require('../database/models');
const Op = db.Sequelize.Op;

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

            const actionBooks = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ],
                where: {
                    genre_id: 1
                }
            });

            const scifiBooks = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ],
                where: {
                    genre_id: 4
                }
            });

            const dramaBooks = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ],
                where: {
                    genre_id: 3
                }
            });

            const economyBooks = await db.Book.findAll({
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ],
                where: {
                    genre_id: 5
                }
            });

            //Guardo la consulta del buscador
            const consulta = req.query.busqueda;

            if(consulta) {
                if (consulta.length > 0) {

                    const requestedBooks = await db.Book.findAll({
                        include: [
                            { association: 'author' },
                            { association: 'genre' },
                            { association: 'publisher' }
                        ],
                        where: {
                            title: {[Op.like]:`%${consulta}%`}
                        }
                    });

                    return res.render('./products/products.ejs', {books: requestedBooks});             
                };
            };
        
            res.render('index', {
                books, 
                lastBooks, 
                actionBooks,
                scifiBooks,
                dramaBooks,
                economyBooks
            });

        } catch (error) {
            console.log(error.message); 
        }
    }
}

module.exports = controlador;