const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine } = require('express-handlebars');
const app = express();

// HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', engine ({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.listen(3000);
