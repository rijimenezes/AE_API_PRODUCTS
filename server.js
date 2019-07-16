const BODY_PARSER = require('body-parser');
const EXPRESS = require('express');
const MORGAN = require('morgan');
const WAGNER = require('wagner-core');
const PATH = require('path');

// SERVER CONFIG
let app = EXPRESS();
require('./models/models')(WAGNER);
var products = require('./routers/product.router')(WAGNER);
var posts = require('./routers/post.router')(WAGNER);


app.use(MORGAN('dev'));
app.use(BODY_PARSER.json());
app.use(BODY_PARSER.urlencoded({extended:false}));

//restrictions
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');//who can access
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');//wich methods can use
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type, Accept,Authorization');//
    next();
});

//base url
const URL_BASE = '/api/v2';
app.use(URL_BASE+'/products',products);
app.use(URL_BASE+'/posts',posts);
module.exports = app;