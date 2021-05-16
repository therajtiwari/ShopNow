import express from "express";
import asyncHandler from "express-async-handler"; //to handle async errors without try catch
import Product from "../models/productModel.js";

const router = express.Router();

//  @desc   Fetch all products
//  @route  GET api/products
//  @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    //  passing empty object fetches us all the products
    const products = await Product.find({});
    res.json(products);
  })
);

//  @desc   Fetch a specific product
//  @route  GET api/products/:id
//  @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p.id === parseInt(req.params.id));
    const product = await Product.findById(req.params.id);
    if (product) {
      //   console.log(" found");
      res.send(product);
    } else {
      //   console.log("not found");
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
