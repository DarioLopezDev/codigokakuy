const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const productsController = require('../controllers/productsController');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/books'))
    },
    filename: function (req, file, cb) {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

let upload = multer({ storage });

router.get('/', productsController.products);


router.get('/carrito', productsController.productCart);


router.get('/create', productsController.create);
router.post('/create', upload.single('imagenProducto'), productsController.store);


router.get('/:id', productsController.detail);


router.get('/:id/edit', productsController.edit);
router.put('/:id', upload.single('imagenProducto'), productsController.update);


router.delete('/delete/:id', productsController.destroy);

module.exports = router;