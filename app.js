var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var empRouter = require('./routes/employee');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
    var router = express.Router();
var department=require('./routes/department')
var trainer=require('./routes/trainer')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', empRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.use('/department',department);
app.use('/trainer',trainer);

module.exports = app;
