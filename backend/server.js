import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import products from "./data/products.js";

const app = express();
dotenv.config();
connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`.brightBlue
      .bgBrightWhite.bold
  )
);
