var mongoose = require('mongoose');
var productModel = require('D:\\My Project 98\\AdvancedWebTachnology\\WarehauseBackEndNode\\model\\product.js');
var response;
function loadProducts(res){
    // mongoose.model('product').create({name:'Product1', description:'non', entrDate:'non', ownerName:'Person1'},function(err,product){
    // });
    var query  = productModel.getAllProducts();
    query.exec(OnProductsLoad);
    response = res;
}

function OnProductsLoad(err, products){
    console.log(products);
    response.render("index",{title:'Dashboard',header:["Name", "Description", "Enter Date", "Owner Name"], data : products});
}

module.exports = {loadProducts};