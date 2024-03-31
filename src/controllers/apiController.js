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

            //Quiero calcular por cada género, cuantos libros hay. 
            //Ej.: ¿Cuántos libros de Acción hay?
            const countCategory = await db.Book.findAll({
                attributes: {
                    exclude: [
                        'book_id',
                        'title',
                        'isbn',
                        'price',
                        'pages',
                        'year',
                        'stock',
                        'image'
                    ]
                }
            });
            let accion = 0, romance = 0, drama = 0, cienciaF = 0, economia = 0, autoayuda = 0;
            countCategory.forEach(element => {
                if(element.dataValues.genre_id === 1) accion++; 
                if(element.dataValues.genre_id === 2) romance++; 
                if(element.dataValues.genre_id === 3) drama++; 
                if(element.dataValues.genre_id === 4) cienciaF++; 
                if(element.dataValues.genre_id === 5) economia++; 
                if(element.dataValues.genre_id === 6) autoayuda++; 
            });

            const genres = await db.Genre.findAll({
                attributes: {
                    exclude: [
                        'genre_id',
                    ]
                }
            });

            genres.forEach(genre => {
                if(genre.dataValues.name === "Accion") genre.dataValues.Libros = accion;
                if(genre.dataValues.name === "Romance") genre.dataValues.Libros = romance;
                if(genre.dataValues.name === "Drama") genre.dataValues.Libros = drama;
                if(genre.dataValues.name === "Ciencia Ficcion") genre.dataValues.Libros = cienciaF;
                if(genre.dataValues.name === "Economia") genre.dataValues.Libros = economia;
                if(genre.dataValues.name === "Autoayuda") genre.dataValues.Libros = autoayuda;
            });

            
            //Editar el image para que pueda ser visualizado
            rows.forEach(book => {
                book.dataValues.detail = `http://localhost:4050/api/products/${book.book_id}`;
            });

            res.json({
                count, 
                countByCategory: {Géneros: genres},
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
                include: [
                    { association: 'author' },
                    { association: 'genre' },
                    { association: 'publisher' }
                ]
            },{
                attributes: {
                    exclude: [
                        'password',
                        'admin'
                    ]
                }
            });
            Object.values(producto)[0].image = "/images/books/" + Object.values(producto)[0].image;
            res.json({ producto });

        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = apiController;