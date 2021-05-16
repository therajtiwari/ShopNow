import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import products from "./data/products.js";
import users from "./data/users.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data inserted successfully".brightGreen.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`Error encountered: ${error}`.brightRed.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("All data deleted successfully".brightGreen.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`Error encountered: ${error}`.brightRed.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
