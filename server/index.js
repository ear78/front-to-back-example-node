var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();

var db = massive.connectSync({
    db: "front_to_back"
});

app.set('db', db);

app.use(cors());
var productsCtrl = require('./controllers/productsCtrl')

app.use(bodyParser.json());
app.use(express.static("../public/app"));

// GET ENDPOINTS //

//get all products
app.get('/products', productsCtrl.getAll);

// find a particular product
app.get('/products/:id', productsCtrl.getProduct);

// POST ENDPOINTS //
// create
app.post('/products', productsCtrl.createProduct);

// PUT ENDPOINTS //
// update
// app.put('/products/:id', function(req, res, next){
//
// })

// DELETE ENDPOINTS //
// delete products
// app.delete('/products/:id', function(req, res, next){
//
// })

app.listen(9090, function(){
    console.log('listening on 9090');
})
