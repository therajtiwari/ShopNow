import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.route("/login").get(authUser);
// router.post("/login", authUser);
export default router;
