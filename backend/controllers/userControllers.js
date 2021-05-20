import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//  @desc   login a user
//  @route  POST api/users/login
//  @access Public

const authUser = asyncHandler(async (req, res) => {
  //   console.log(req);
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.send({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Invalid Email or Password");
  }
});

export { authUser };
