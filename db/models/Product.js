const mangoose = require("mangoose");

const { model, schema } = require("mongoose");

const ProductSchema = new schema(
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
