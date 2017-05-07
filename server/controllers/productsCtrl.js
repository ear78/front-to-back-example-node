var app = require('../index.js');
var db = app.get('db');

module.exports = {
    getAll: function(req,res,next){
        db.get_all_products(function(err, products){
            res.status(200).json(products);
        })
    },
    getProduct: function(req,res,next){
        db.get_product(req.params.id, function(err, product){
            res.status(200).send(product);
        })
    },
    createProduct: function(req,res,next){
        db.add_product([req.body.id,req.body.name,req.body.description,req.body.type], function(err, product){
            res.status(200).send(product);
        })
    }

}
