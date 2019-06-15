var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var productSchema = new Schema({
    name:String,
    description:String,
    entrDate:String,
    ownerName:String
});
mongoose.model('product', productSchema);

function getAllProducts(){
    return mongoose.model('product').find();
}

module.exports = {getAllProducts};