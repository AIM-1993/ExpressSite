var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

// Router
var homeRouter = require('./routes/home');
var videoRouter = require('./routes/video');
var usersRouter = require('./routes/users');

// init-app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', homeRouter);
app.use('/video', videoRouter);
app.use('/users', usersRouter);


module.exports = app;
