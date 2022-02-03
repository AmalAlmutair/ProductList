const express = require("express");
const products = require("../data");
const { product } = require("../controller/product.controller");
const productRouter = express.Router();
const {
  fetchProductController,
  addProductController,
  deleteProductController,
} = require("../controller/product.controller");

productRouter.get("/", fetchProductController);
// productRouter.get("/api/products/1", fetchProduct1Controller);
productRouter.post("/", addProductController);
productRouter.delete("/:productId", deleteProductController);

module.exports = productRouter;
