var express = require("express");
var router = express.Router();

function loadProducts(res){
    res.render("index",{title:'Dashboard'})
}



module.exports = {loadProducts};