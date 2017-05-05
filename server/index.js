var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


// GET ENDPOINTS //

//get all products
app.get('/products', function(req, res, next){

})

// find a particular product
app.get('/products/:id', function(req, res, next){

})

// POST ENDPOINTS //
// create
app.post('/products', function(req, res, next){

})

// PUT ENDPOINTS //
// update
app.put('/products/:id', function(req, res, next){

})

// DELETE ENDPOINTS //
// delete products
app.delete('/products/:id', function(req, res, next){

})

app.listen(9090, function(){
    console.log('listening on 9090');
})
