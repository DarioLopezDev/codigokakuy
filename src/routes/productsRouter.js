const express = require('express');
const router = express.Router();
const multer = require('multer');

const productsController = require('../controllers/productsController');


router.get('/', productsController.index);


router.get('/detail/:id', productsController.detail);


router.get('/create', productsController.create);
router.post('/create', productsController.store);


router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);


router.delete('/delete/:id', productsController.destroy);

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
