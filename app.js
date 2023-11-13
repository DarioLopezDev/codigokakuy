const express = require('express');
const app = express();
const port = 4000;

const path = require('path');
const { CLIENT_RENEG_LIMIT } = require('tls');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const carritoPath = path.join(__dirname, 'views/carrito.html');
app.get('/carrito', (req, res) => {
    res.sendFile(carritoPath);
});

const detallesPath = path.join(__dirname, 'views/detalles.html');
app.get('/detalles', (req, res) => {
    res.sendFile(detallesPath);
});

const homePath = path.join(__dirname, 'views/home.html');
app.get('/', (req, res) => {
    res.sendFile(homePath);
});

const loginPath = path.join(__dirname, 'views/login.html');
app.get('/login', (req, res) => {
    res.sendFile(loginPath);
});

const registerPath = path.join(__dirname, 'views/register.html');
app.get('/register', (req, res) => {
    res.sendFile(registerPath);
});

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
