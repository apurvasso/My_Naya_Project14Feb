var express = require("express"),
  app = express(),
  port = process.env.PORT || 9000, //port number 3000
  mongoose = require("mongoose"),
  Product = require("./restapi/models/productModel"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/nayadatabase"); //database

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require("./restapi/routes/productRoutes");

routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log("Naya's -  RESTful web services with Nodejs started on: " + port);
