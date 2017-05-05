var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/test', function(req,res,next){
    res.status(200).send('yay');
})

app.listen(9090, function(){
    console.log('listening on 9090');
})
