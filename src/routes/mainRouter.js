const express = require('express');
const router = express.Router();

const controlador = require('../controllers/mainController');

router.get('/', controlador.index);
router.get('/carrito', controlador.productCart);
router.get('/detalles', controlador.productDetail);
router.get('/login', controlador.login);
router.get('/register', controlador.register);

module.exports = router;