const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const upload = require('../middlewares/multerMiddleware');
const guestMiddleware = require('../middlewares/guestMidleware');
const userMiddleware = require('../middlewares/userMiddleware');

//Register
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('foto'), usersController.create);

//Login
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.session);

//Profile
router.get('/profile', userMiddleware, usersController.profile);
router.get('/logout', usersController.logout);

module.exports = router;