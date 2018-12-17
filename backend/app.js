var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection = require('./db/connection');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var db_data = [];


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connect success');
});

connection.query('SELECT * FROM `testuser`', function (error, results, fields) {
    if (error) throw error;
    db_data = results;
    console.log('Query data...');
});

connection.end();

module.exports = app;
