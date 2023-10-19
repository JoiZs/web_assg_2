const { Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: String,
});

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

module.exports = { CategorySchema, ProductSchema };
