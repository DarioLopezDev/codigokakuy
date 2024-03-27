const db = require('../database/models');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

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
            let { email, contrasena } = req.body;

            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('./users/login.ejs', {
                    errors: resultValidation.mapped(), //Convierte el array en un objeto literal
                    oldEmail: email //Conserva el correo electrónico ingresado por el usuario en el login
                });

            };
            //let userFound = users.find(user => user.nombreUsuario == nombreUsuario);

            let userFound = await db.User.findOne({
                where: {
                    email: email,
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
            console.log(error.message);
        }

    },

    register: (req, res) => {
        res.render('./users/register.ejs');
    },

    create: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            console.log('error express validator', resultValidation.mapped());
            return res.render('./users/register.ejs', {
                errors: resultValidation.mapped(), //Convierte el array en un objeto literal
                oldData: req.body //Conserva lo ingresado por el usuario en el formulario                
            });

        };

        const {
            nombreApellido,
            nombreUsuario,
            email,
            fechaNacimiento,
            domicilio,
            contrasena } = req.body;

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
        res.render('./users/editUsers.ejs', { userFound });
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
    },

    isEmailExist: async (req, res) => {
        try {
            const userEmail = req.params.email;

            const findedEmail = await db.User.findOne({
                where: {
                    email: userEmail
                }
            });

            if (!findedEmail) {
                return res.send(false);
            } else {
                return res.send(true);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = usersController;