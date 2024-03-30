const db = require('../database/models');

const apiController = {
    allUsers: async (req, res) => {
        try {
            //count y rows Palabras Reservadas            
            const { count, rows } = await db.User.findAndCountAll({
                attributes: {
                    exclude: [
                        'username',
                        'birthday',
                        'adress',
                        'password',
                        'image',
                        'admin'
                    ]
                }
            });
            //const count = Object.values(usuarios);
            rows.forEach(user => {
                user.dataValues.detail = `http://localhost:4050/api/users/${user.user_id}`;
            });
            res.json({
                count, 
                users: rows
            });

        } catch (error) {
            console.log(error.message);
        }
    },
    userDetail: async (req, res) => {
        try {
            const idU = req.params.id;
            const usuario = await db.User.findByPk(idU, {
                attributes: {
                    exclude: [
                        'password',
                        'admin'
                    ]
                }
            });
            Object.values(usuario)[0].image = "/images/users/" + Object.values(usuario)[0].image;

            res.json({ usuario });

        } catch (error) {
            console.log(error.message);
        }

    },
    allProducts: async(req, res) => {
        try {
            //count y rows Palabras Reservadas            
            const { count, rows } = await db.Book.findAndCountAll({
                attributes: {
                    exclude: [
                        'isbn',
                        'price',
                        'pages',
                        'year',
                        'stock',
                        'image',
                        'author_id',
                        'publisher_id',
                        'genre_id'
                    ]
                }
            });
            //const count = Object.values(usuarios);
            rows.forEach(book => {
                book.dataValues.detail = `http://localhost:4050/api/products/${book.book_id}`;
            });
            res.json({
                count, 
                countByCategory: 'objeto literal con una propiedad por categoría con el total de productos',
                products: rows
            });                        
        } catch (error) {
            console.log(error.message);            
        }
    },
    productDetail: async(req, res) => {
        try {
            const idP = req.params.id;
            const producto = await db.Book.findByPk(idP, {
                attributes: {
                    exclude: [
                        'password',
                        'admin'
                    ]
                }
            });
            res.json({ producto });

        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = apiController;