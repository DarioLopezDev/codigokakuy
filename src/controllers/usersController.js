const fs = require('fs');
const path = require('path');
let productsFilePath = path.join(__dirname, '../data/users.json');
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
            
        }
    }
};

module.exports = usersController;