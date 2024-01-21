const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

const usersController = {
    login: (req, res) => {
        res.render('./users/login.ejs');
    },

    validate: (req, res) => {
        
    },

    register: (req, res) => {
        res.render('./users/register.ejs');
    },

    create: (req, res) => {
        const {nombreApellido, nombreUsuario, email, fechaNacimiento, domicilio, contrasena}  = req.body
        let userFound = users.find(user => user.email == email);
        if(userFound) return res.send('<h1>Este mail ya está siendo usado</h1>');
        const newUser = {
    //Por seguridad no usar el sread operator "...req.body"
    //Porque pueden agregar inputs indeseados al JSON
            id: Date.now(),
            nombreApellido,
            nombreUsuario,
            email,
            fechaNacimiento,
            domicilio,
            //encriptar contraseña
            contrasena: bcrypt.hashSync(contrasena, 10),
            category: 'User',
            foto: `http://localhost:4050/images/users/${req.file?.filename || 
            'default-image.jpg'}`
        }
        users.push(newUser);

        let usersJSON = JSON.stringify(users, null, ' ');
        fs.writeFileSync(usersFilePath, usersJSON);

        res.redirect('/');
    }
};

module.exports = usersController;