const express = require("express");

const products = require("./data/data");

const app = express();
const PORT = 9000;
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/products/1", (req, res) => {
  const product = products.find((product) => +product.id === 1);
  res.json(product);
});
app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => +product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => product !== productId);
    res.json(foundProduct);
    res.status(204).end();
  } else {
    res.status(404);
    res.json("this product is not exist");
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/api/products", (req, res) => {
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
  //   products = [...products, Chproduct];
  res.json({ msg: "Product is created", Chproduct });
  //   res.json(product);
});
app.listen(PORT, () => {
  console.log("Hello Word", PORT);
});

// module.export = app;
