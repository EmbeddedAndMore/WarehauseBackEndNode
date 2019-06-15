var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var bodyParser = require("body-parser");


var routes = require("./routes");

var app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname,"view"));
app.set("view engine", "pug");



app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes); // use router
mongoose.connect('mongodb://localhost:27017/WarehauseDB',{ useNewUrlParser: true });

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});