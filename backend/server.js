import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

// routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// middleware
import { notFound, errorHandler } from "./middleware/middleware.js";

const app = express();

app.use(express.json()); // to access the body as json

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

// redirecting the product route to the seperate productRoute
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`.brightBlue
      .bgBrightWhite.bold
  )
);
