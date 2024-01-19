const fs = require('fs');
const path = require('path');
let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json')));

const usersController = {
    login: (req, res) => {
        res.render('./users/login.ejs');
    },

    validate: (req, res) => {},

    register: (req, res) => {
        res.render('./users/register.ejs');
    },

    create: (req, res) => {
        const newUser = {
            id: Date.now(),
            ...req.body,
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