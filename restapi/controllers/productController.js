"use strict";

var mongoose = require("mongoose"),
  Product = mongoose.model("Products");

//To fetch all products from database, find method is used.
// You can see empty {}. This is used to apply criteria.
// If there is no error, a JSON encoded products array is returned to client.
exports.nayacollection = function (req, res) {
  Product.find({}, function (err, product) {
    if (err) res.send(err);

    res.json(product);
  });
};

//A single product information can be fetched using getproduct method.
//Client sends a productId. ProductId is passed to Product Model’s findById method.
// JSON encoded product data is returned to client
exports.getproduct = function (req, res) {
  var productId = req.query.productId;

  Product.findById(mongoose.Types.ObjectId(productId), function (err, product) {
    if (err) res.send(err);

    res.json(product);
  });
};

//Adding new product to database is done by using add method
//Client sends new product data to web service. Data is passed to save method.
//On success newly added product data is returned to client.
exports.add = function (req, res) {
  var new_product = new Product(req.body);

  new_product.save(function (err, product) {
    if (err) res.send(err);

    res.json(product);
  });
};

//An existing product information is updated using update method.
//Client sends updated product information with productId. findOneAndUpdate
//method is used to update information of an existing product .On success JSON
//encoded updated product data is sent to client.
exports.update = function (req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);

  Product.findOneAndUpdate(
    { _id: id }, //////////////comment why
    req.body,
    { new: true },
    function (err, product) {
      if (err) res.send(err);

      res.json(product);
    }
  );
};

//To remove a product from database delete method is defined.
//Product Id parameter is passed by client and is further passed to remove method
//of Product schema. On successful deletion a message is given, otherwise an error is
//is returned to the client.
exports.delete = function (req, res) {
  var id = mongoose.Types.ObjectId(req.query.productId);

  Product.remove(
    {
      _id: id,
    },
    function (err, product) {
      if (err) res.send(err);

      res.json({ message: "Product successfully deleted" });
    }
  );
};
