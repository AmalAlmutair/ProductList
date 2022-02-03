const mongoose = require("mongoose");

const { model, Schema } = require("mongoose");

const ProductSchema = new Schema(
  {
    id: Number,
    name: { type: String, required: true },
    slug: String,
    image: String,
    description: String,
    color: String,
    quantity: { type: Number, default: 0, minimum: 0 },
    price: { type: Number, default: 100 },
  },

  {
    timestamps: true,
  }
);
module.exports = model("product", ProductSchema);
