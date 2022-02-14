"use strict";

module.exports = function (app) {
  var product = require("../controllers/productController");

  app
    .route("/nayacollection")

    .get(product.nayacollection)

    .post(product.add);

  app
    .route("/nayacollection/:productId")

    .get(product.getproduct)

    .put(product.update)

    .delete(product.delete);
};
