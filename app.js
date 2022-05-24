const port = process.env.PORT || 8080;
//Base Variables for Express
var path = require('path');
var express = require('express');
var flash = require('express-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var conn = require('./lib/db');

//Routing
var homeRoute = require('./routes/index');
var authRouter = require('./routes/auth');
var durRouter = require('./routes/dur');
var app = express();


//Engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session({
    secret: '321467%096',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 120000 }
}));

app.use(flash());

app.use('/', homeRoute);
app.use('/login', authRouter);
app.use('/time', durRouter)

app.listen(port, () => console.log(`Listening on port ${port}...`))

module.exports = app;