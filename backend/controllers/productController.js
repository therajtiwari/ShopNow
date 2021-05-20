import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//  @desc   Fetch all products
//  @route  GET api/products
//  @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//  @desc   Fetch a specific product
//  @route  GET api/products/:id
//  @access Public
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export { getProducts, getProductByID };
