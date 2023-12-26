const express = require('express');
const router = express.Router();
const multer = require('multer');

const controlador = require('../controllers/mainController');

router.get('/', controlador.index);
router.get('/carrito', controlador.productCart);
router.get('/detalles', controlador.productDetail);
router.get('/login', controlador.login);
router.get('/register', controlador.register);
router.get('/create', controlador.productCreate);
router.get('/edit', controlador.productEdit);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

let upload = multer({ storage: storage });

app.post('/register', upload.single('foto'), (req, res) => {
    console.log(req.file) // Nos devuelve un objeto con la información del archivo
    res.send('Archivo subido correctamente')
});

app.post('/admin-createProducts', upload.array('imagenProducto'), (req, res) => {
    console.log(req.file) // Nos devuelve un objeto con la información del archivo
    res.send('Archivos subidos correctamente')
});

app.post('/admin-editProducts', upload.array('imagenProducto'), (req, res) => {
    console.log(req.file) // Nos devuelve un objeto con la información del archivo
    res.send('Archivos subidos correctamente')
});

module.exports = router;
