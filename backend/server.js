import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

// routes
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

// redirecting the product route to the seperate productRoute
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`.brightBlue
      .bgBrightWhite.bold
  )
);
