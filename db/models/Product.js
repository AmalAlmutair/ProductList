const mongoose = require("mongoose");

const { model, Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    id: Number,
    name: String,
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: Number,
    price: Number,
  },

  {
    timestamps: true,
  }
);
module.exports = model("product", ProductSchema);
