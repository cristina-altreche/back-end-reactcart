const mongoose = require("mongoose");
const shortid = require("shortid");

//responsible for creating a model. Takes two params
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    //when you create a new item in db a new id will generate
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

const Order = mongoose.model(
  "order",
  new mongoose.Schema(
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      email: String,
      name: String,
      address: String,
      total: Number,
      cartItems: [
        {
          _id: String,
          title: String,
          price: Number,
          count: Number,
        },
      ],
    },
    {
      timestamps: true, //created at and updated at
    }
  )
);

module.exports = {Product, Order}
