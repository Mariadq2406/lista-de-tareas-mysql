require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const tareasRoutes = require('./routes/tarea');
const {
    urlencoded
} = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "listadetareas"
}, 'single'));
app.use(express.urlencoded({
    extended: false
}));

// routes
app.use('/', tareasRoutes);

//static files
app.use(express.static(path.join(__dirname, '/public')));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Listening at http://localhost:3000');
});