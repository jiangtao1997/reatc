const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({
    id:Number,
    image: String,
    name:String,
    text:String,
    star:{}
});
schema.plugin(mongoosePaginate);


module.exports=mongoose.model('counter',schema,'counter');//如果不写第三个参数，则默认生成复数形式