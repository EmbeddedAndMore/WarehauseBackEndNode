var productModel = require('D:\\My Project 98\\AdvancedWebTachnology\\WarehauseBackEndNode\\model\\product.js');
var response;



function saveProduct(req){
    
    var product = {name:req.body.name, 
                    description:req.body.description, 
                    entrDate:'non', 
                    ownerName:req.body.ownerName}
     productModel.addProduct(product);
}


function loadAndShowProducts(res){
    
    var query  = productModel.getAllProducts();
    query.exec(OnProductsLoad);
    response = res;
}




function OnProductsLoad(err, products){
    console.log(products);
    response.render("remove-product",
    {
        title:'Remove Product',
        header:["Name", "Description", "Enter Date", "Owner Name"], 
        data : products
    });
}

function removeProduct(id, res)
{
    productModel.removeProduct(id);
    loadAndShowProducts(res);
}

module.exports = {saveProduct,loadAndShowProducts,removeProduct};