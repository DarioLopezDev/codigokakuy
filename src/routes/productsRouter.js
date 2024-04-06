const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const upload = require('../middlewares/productMulterMiddleware');
const validations = require('../middlewares/validateProducts')


//Todos los productos
router.get('/', productsController.products);


//Carrito de compras
router.get('/carrito', productsController.productCart);


//Formulario de creación de Libros
router.get('/create', productsController.create);
router.post('/create', upload.single('imagenProducto'), validations, productsController.store);


//Debe ir arriba de la ruta detalle porque tiene rutas parametrizadas luego del /products
//Todos los autores para el formulario de creación de libros
router.get('/allAuthors', productsController.allAuthors);

//Todos los autores para el formulario de creación de libros
router.get('/allPublishers', productsController.allPublishers);


//Detalles
router.get('/:id', productsController.detail);


//Formulario de edición
router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('imagenProducto'), productsController.update);


router.delete('/delete/:id', productsController.destroy);

module.exports = router;