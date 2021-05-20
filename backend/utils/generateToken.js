import jwt from "jsonwebtoken";

const generateToken = (id) => {
  var token = jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d",
  });
  return token;
};

export default generateToken;
