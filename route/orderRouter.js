const router = require("express").Router();
const Order = require("../model/models");

//ORDER CREATION API
router.post("/api/orders", async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    return res.send({ message: "Data is required" });
  }
  const order = await Order(req.body).save();
  res.send(order);
});

module.exports = router;
