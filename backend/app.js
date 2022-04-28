var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// history 모듈
const connectHistory = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
const memoRouter = require('./routes/apimemo');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// history 모듈 사용
app.use(connectHistory());

app.use('/', indexRouter);
app.use('/api/memo/', memoRouter);

module.exports = app;
