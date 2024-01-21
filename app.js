//Dependencias
const express = require('express');
const app = express();
const port = 4050;
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//Rutas requeridas
const rutas = require('./src/routes/mainRouter');
const rutasProductos = require('./src/routes/productsRouter');
const rutasUsuarios = require('./src/routes/usersRouter');

//Uso de imágenes y css
app.use(express.static('public'));

//Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "No hay plata", resave: true, saveUninitialized: false }));

//Uso de PUT y DELETE
app.use(methodOverride('_method'));

//Uso de archivos EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//Uso de Rutas
app.use('/', rutas);
app.use('/products', rutasProductos);
app.use('/users', rutasUsuarios);

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


/*
function filtrarLibros() {
    const name = document.getElementById("name").value;
    const año = parseInt(document.getElementById("año").value);
    const autor = document.getElementById("autor").value;
    const genero = document.getElementById("genero").value;
    const price = parseFloat(document.getElementById("price").value);
    const editorial = document.getElementById("editorial").value;
    const ISBN = document.getElementById("ISBN").value;

    const filtro = {};

    if (name !== "") {
        filtro["name"] = name;
    }

    if (!isNaN(año)) {
        filtro["año"] = año;
    }

    if (autor !== "") {
        filtro["autor"] = autor;
    }

    if (genero !== "") {
        filtro["genero"] = genero;
    }

    if (!isNaN(price)) {
        filtro["price"] = price;
    }

    if (editorial !== "") {
        filtro["editorial"] = editorial;
    }

    if (ISBN !== "") {
        filtro["ISBN"] = ISBN;
    }

    const librosFiltrados = libros.filter(libro => {
        for (const clave in filtro) {
            if (libro[clave] !== filtro[clave]) {
                return false;
            }
        }
        return true;
    });

    mostrarResultados(librosFiltrados);
}

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "No se encontraron resultados.";
        return;
    }

    resultados.forEach(libro => {
        const libroDiv = document.createElement("div");
        libroDiv.innerHTML = `<strong>${libro.name}</strong> - Autor: ${libro.autor}, Género: ${libro.genero}, Precio: ${libro.price}`;
        resultadosDiv.appendChild(libroDiv);
    });
}
*/