import express from "express";
import Product from "../models/productModel.js";
import {
  getProducts,
  getProductByID,
} from "../controllers/productController.js";

const router = express.Router();

// both do the same thing
router.get("/", getProducts);
router.get("/:id", getProductByID);
// router.route("/:id").get(getProductByID);

export default router;
