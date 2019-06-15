var express = require("express");
var router = express.Router();

var dashboard = require("./controller/dashboardController");
var producController = require("./controller/productController");

router.get("/", function(req,res){
    //res.render("index",{title:'Dashboard'});
    dashboard.loadProducts(res);
});

router.get("/index", function(req,res){
    res.render("index",{title:'Dashboard'});
    console.log("This is index")
});

router.get("/addproduct", function(req,res){
    res.render("add-product",{title:'Add Product'});
});
router.post("/addproduct", function(req,res){
    console.log(req.body);
    producController.saveProduct(req);
    res.render("add-product",{title:'Add Product'});
});

router.get("/removeproduct", function(req,res){
    producController.loadAndShowProducts(res);
    console.log("This is add product")
});

router.get("/deleteproduct", function(req,res){
    producController.removeProduct(req.query.id,res);
    console.log("delete product called");
});

// router.get("/reportproduct", function(req,res){
//     res.render("remove-product",{title:'Remove Product'});
//     console.log("This is add product")
// });
module.exports = router;