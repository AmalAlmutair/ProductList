const connectDb = require("./db/database");
const express = require("express");
const productsRouter = require("./routers/product.router");
const app = express();
const PORT = 9000;

// 1. Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2. Main routers

app.use("/api/products/", productsRouter);

// 3. server connection
app.listen(PORT, () => {
  console.log("Servrer is listening to port", PORT);
  connectDb();
});

// module.export = app;
