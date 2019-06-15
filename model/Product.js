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
function addProduct(product){
    mongoose.model('product').create(product,function(err,product){
    });
}
function removeProduct(id)
{
    mongoose.model('product').deleteOne({_id:id},function(err,product){
    });
}
module.exports = {getAllProducts,addProduct,removeProduct};