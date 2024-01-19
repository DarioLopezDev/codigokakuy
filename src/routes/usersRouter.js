const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usersController = require('../controllers/usersController');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function (req, file, cb) {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

let upload = multer({ storage });

//Login
router.get('/login', usersController.login);
//router.post('/login', usersController.validate);

//Register
router.get('/register', usersController.register);
router.post('/register', upload.single('foto'), usersController.create);

module.exports = router;