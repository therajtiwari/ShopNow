const express = require("express");
const products = require("./data/products.js");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
  //   res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  res.send(product);
});

app.listen(5000, console.log("Server running on port 5000"));
