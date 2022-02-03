const Product = require("../db/models/Product");
// const mangoose = require("mangoose");
const productsData = require("../data");
let products = productsData;

exports.fetchProductController = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.fetchProduct1Controller = (req, res) => {
  const product = products.find((product) => +product.id === 1);
  res.json(product);
};

exports.deleteProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByIdAndDelete(productId);
    // products.find((product) => +product.id === +productId);
    if (foundProduct) {
      products = products.filter((product) => +product.id !== +productId);
      res.status(204).json(foundProduct);
      // res.status(204).end();
    } else {
      res.status(404);
      res.json("this product is not exist");
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
exports.addProductController = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await Product.create(product);

    // products = [...products, newProduct];
    res.status(201).json({ msg: "Product is created", newProduct });
    //   res.json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
exports.updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });

    // products = [...products, newProduct];
    res.json({ msg: "Product is updated", payload: updatedProduct });
    //   res.json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
