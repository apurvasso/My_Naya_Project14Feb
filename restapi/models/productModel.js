var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
  items: { type: String, Required: "Item name cannot be left blank" },
  product_ids: {
    type: Number,
    Required: "Product id(integer) cannot be left blank.",
  },
  prices: { type: String, Required: "Product price cannot be left blank." },
  descriptions: {
    type: String,
    Required: "Product description cannot be left blank",
  },
  dimensions: { type: String },
  img_urls: { type: String },
  prices: { type: String, Required: "Product price cannot be left blank." },
  category: { type: String },
  prod_page_urls: { type: String },
  new_category: { type: String },
  chair: { type: Number },
  table: { type: Number },
});

module.exports = mongoose.model("Products", productSchema);
