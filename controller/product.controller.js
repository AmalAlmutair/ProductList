const productsData = require("../data/data");
let products = productsData;
exports.fetchProductController = (req, res) => {
  res.json(products);
};

exports.fetchProduct1Controller = (req, res) => {
  const product = products.find((product) => +product.id === 1);
  res.json(product);
};

exports.deleteProductController = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => +product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => +product.id !== +productId);
    res.json(foundProduct);
    // res.status(204).end();
  } else {
    res.status(404);
    res.json("this product is not exist");
  }
};
exports.addProductController = (req, res) => {
  const { name, image, description, color, quantity, price } = req.body;
  const Chproduct = {
    name,
    image,
    description,
    color,
    quantity,
    price,
    id: Math.floor(Math.random() * 1000000),
  };
  products = [...products, Chproduct];
  res.json({ msg: "Product is created", Chproduct });
  //   res.json(product);
};
