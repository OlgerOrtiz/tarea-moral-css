const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
<<<<<<< HEAD
const handlebars = require('express-handlebars');

=======
>>>>>>> 691f264d176befe7e19943492e7b68e9a3927221
// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

<<<<<<< HEAD
// cargar los archivos css estaticos
app.use(express.static(__dirname+"/public"));
app.set('view engine', 'handlebars');
app.set("views", __dirname + "/views");
app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: "index"
}));
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "img-src": ["'self'", "https: data:"]
        }
    })
)
=======
>>>>>>> 691f264d176befe7e19943492e7b68e9a3927221


app.use('/', router);

module.exports = app;