//Dependencias
const express = require('express');
const app = express();
const port = 4050;
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors')

//Rutas requeridas
const rutas = require('./src/routes/mainRouter');
const rutasProductos = require('./src/routes/productsRouter');
const rutasUsuarios = require('./src/routes/usersRouter');
const rutasApi = require('./src/routes/apiRouter');

//Uso de imágenes y css
app.use(express.static('public'));

//Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));


app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "No hay plata", resave: true, saveUninitialized: false }));

//Middlewares de aplicación (Debe ir después de la session)
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);

//Uso de PUT y DELETE
app.use(methodOverride('_method'));

//Solución SPRINT8 para el fetch sin cors
/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })*/
//Solución SPRINT8 para el fetch con cors
app.use(cors());


//Uso de archivos EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//Uso de Rutas
app.use('/', rutas);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuarios);
app.use('/api', rutasApi);

//En caso de que no encuentre una ruta <Debe ir debajo de todas las rutas>
app.get('*', (req, res) => {
    res.send(`
    <h1>No existe esa página</h1>
    <h3><a href="/">Volver al Home</a></h3>
    `)
});

app.listen(port, () => {
    console.log(`
    Servidor levantado correctamente en el puerto ${port}
    http://localhost:4050/
    `);
});