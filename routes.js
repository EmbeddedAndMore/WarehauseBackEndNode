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
    console.log("This is add product")
});

router.get("/removeproduct", function(req,res){
    res.render("remove-product",{title:'Remove Product'});
    console.log("This is add product")
});

// router.get("/reportproduct", function(req,res){
//     res.render("remove-product",{title:'Remove Product'});
//     console.log("This is add product")
// });
module.exports = router;