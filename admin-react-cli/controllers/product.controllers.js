const mongoose=require('mongoose');

var Product= require('../models/product.model');

exports.create=function(req,res,next){
    const product=new Product(req.body);
    product.save().then((data)=>res.json(data));
}
exports.getById=function(req,res,next){
    var id=req.params.id;
    Product.find({id:+id}).then(data=>{
        res.json(data)
    })
}
exports.list = function(req,res,next){
    function sortBy(arr,value, isAscend) {
        isAscend = isAscend || true;
        arr.sort(function (a, b) {
            if (isAscend) {
                return a[value] - b[value]
            } else {
                return b[value] - a[value]
            }
        });
    }
    Product.find().then(data=>{
        sortBy(data,"id",false);
        res.json(data)
    })//不分页写法
}