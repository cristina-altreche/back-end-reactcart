const router = require("express").Router();
const Product = require("../model/models");

router.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  //send back to client
  res.send(products);
});

router.post("/api/products", async (req, res) => {
  //creates a new product inside the db
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;
