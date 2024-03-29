const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

//USERS

//Todos
router.get('/users', apiController.allUsers);

//Uno
router.get('/users/:id', apiController.userDetail);

//PRODUCTS

//Todos
router.get('/products', apiController.allProducts);

//Uno
router.get('/products/:id', apiController.productDetail)

module.exports = router;