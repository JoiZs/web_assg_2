const mongoose = require("mongoose");
const { CategorySchema, ProductSchema } = require("../schema");

const CategoryModel = new mongoose.model("Category", CategorySchema);
const ProductModel = new mongoose.model("Product", ProductSchema);

module.exports = {
  CategoryModel,
  ProductModel,
};
