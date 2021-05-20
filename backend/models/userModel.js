import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      unique: true,
      sparse: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamp: true }
);

userSchema.methods.matchPassword = async function (receivedPassword) {
  return await bcrypt.compare(receivedPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
