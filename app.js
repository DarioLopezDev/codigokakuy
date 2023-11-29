const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const rutas = require('./src/routes/mainRouter');
// const { CLIENT_RENEG_LIMIT } = require('tls');

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', rutas)

// const carritoPath = path.join(__dirname, './src/views/carrito.ejs');
// app.get('/carrito', (req, res) => {
//     res.sendFile(carritoPath);
// });

// const detallesPath = path.join(__dirname, './src/views/detalles.ejs');
// app.get('/detalles', (req, res) => {
//     res.sendFile(detallesPath);
// });



// const loginPath = path.join(__dirname, './src/views/login.ejs');
// app.get('/login', (req, res) => {
//     res.sendFile(loginPath);
// });

// const registerPath = path.join(__dirname, './src/views/register.ejs');
// app.get('/register', (req, res) => {
//     res.sendFile(registerPath);
// });

app.get('*', (req, res) => {
    res.send(`
    <h1>No existe esa página</h1>
    <h3><a href="/">Volver al Home</a></h3>
    `)
});

app.listen(port, () => {
    console.log(`
    Servidor levantado correctamente en el puerto ${port}
    http://localhost:4000/
    `);
});
