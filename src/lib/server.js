const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Import routes
const productsRouter = require("../../route/productsRouter");
const orderRouter = require("../../route/orderRouter");

const app = express();
app.use(bodyParser.json(), cors());
app.use(helmet());
app.use(logger);

// env variable
const port = process.env.PORT || 4000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-shopping-cart",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

app.get("/", (req, res) => {
  // const nameInsert = req.name ? `${req.name}` : ""
  const message = process.env.MESSAGE || "hello from server";
  res.status(200).json({ message, database: process.env.DB_NAME });
});

// Custom Middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

// Routes
app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

app.listen(port, () => console.log("serve at http://localhost:4000"));

module.exports = app;
