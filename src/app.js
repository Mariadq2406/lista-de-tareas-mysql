const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require ('express-myconnection');

const app = express();

// importing routes
const tareasRoutes = require('./routes/tarea');
const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
host:'localhost',
user:'root',
port:'3306',
database:'listadetareas',
},'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', tareasRoutes);

//static files
app.use(express.static(path.join(__dirname, '/public')));

//starting the server
app.listen(app.get('port'), () => {
    console.log('Listening at http://localhost:3000');
});