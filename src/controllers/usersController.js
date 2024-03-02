const db = require('../database/models');
const bcrypt = require('bcryptjs');

/*const fs = require('fs');
const path = require('path');

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

let books = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productos.json')));*/

const usersController = {
    login: (req, res) => {
        res.render('./users/login.ejs');
    },

    session: async (req, res) => {
        try {
            let { nombreUsuario, contrasena } = req.body;
            //let userFound = users.find(user => user.nombreUsuario == nombreUsuario);
            console.log(nombreUsuario, contrasena);
            let userFound = await db.User.findOne({
                where: {
                    username: nombreUsuario,
                }
            });

            if (userFound) {
                if (bcrypt.compareSync(contrasena, userFound.password)) {
                    //proteger la contraseña
                    userFound.contrasena = null;

                    //Crear la sesión
                    req.session.userLogged = userFound;

                    return res.redirect('/');
                }

            }
            res.send('<h1>El usuario y/o contraseña son incorrectos</h1><button><a href="/users/login">Volver a logearse</a></button>');
        } catch (error) {

        }

    },

    register: (req, res) => {
        res.render('./users/register.ejs');
    },

    create: (req, res) => {
        const { nombreApellido, nombreUsuario, email, fechaNacimiento, domicilio, contrasena } = req.body
        /*let userFound = users.find(user => user.email == email);
        if (userFound) return res.send('<h1>Este mail ya está siendo usado</h1>');*/
        const newUser = {
            //Por seguridad no usar el spread operator "...req.body"
            //Porque se pueden agregar inputs indeseados al JSON

            fullname: nombreApellido,
            username: nombreUsuario,
            email: email,
            birthday: fechaNacimiento,
            adress: domicilio,
            //encriptar contraseña
            password: bcrypt.hashSync(contrasena, 10),
            admin: 0,
            image: `${req.file?.filename ||
                'default-image.jpg'}`
        }
        /*users.push(newUser);

        let usersJSON = JSON.stringify(users, null, ' ');
        fs.writeFileSync(usersFilePath, usersJSON);*/
        db.User.create(newUser);

        res.redirect('/');
    },

    profile: (req, res) => {
        db.Book.findAll({
            include: [
                { association: 'author' },
                { association: 'genre' },
                { association: 'publisher' }
            ]
        })
            .then(books => {
                res.render('./users/profile.ejs', { user: req.session.userLogged, books });
            })
            .catch(error => console.log(error.message));
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },

    edit: async (req, res) => {
        let loggedUser = req.session.userLogged.username;
        let userFound = await db.User.findOne({
            where: {
                username: loggedUser,
            }
        });
        res.render('./users/editUsers.ejs', {userFound});
    },

    update: (req, res) => {
        const { nombreApellido, nombreUsuario, email, fechaNacimiento, domicilio, contrasena } = req.body
        let loggedUser = req.session.userLogged.username;
        db.User.update({
            fullname: nombreApellido,
            username: nombreUsuario,
            email: email,
            birthday: fechaNacimiento,
            adress: domicilio,
            //encriptar contraseña
            password: bcrypt.hashSync(contrasena, 10),
            admin: 0,
            image: `${req.file?.filename ||
                'default-image.jpg'}`
        }, {
            where: { username: loggedUser }
        });

        res.redirect('/users/profile');
    }
};

module.exports = usersController;