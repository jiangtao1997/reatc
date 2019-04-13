const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({
    id:Number,
    image:String,
    title: String,
    text:String,
    data:Date
});
schema.plugin(mongoosePaginate);
module.exports=mongoose.model('News',schema);