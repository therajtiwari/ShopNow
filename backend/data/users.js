import bcrypt from "bcryptjs";

const users = [
  {
    name: "Raj Tiwari",
    email: "therajtiwari@gmail.com",
    password: bcrypt.hashSync("helloworld", 10),
    isAdmin: true,
  },
  {
    name: "Alex Jackson",
    email: "alexjackson@gmail.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Alan Rickman",
    email: "alanrickman@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    phoneNo:"+918743453423"
  },
  {
    name: "Marshall Mathers",
    email: "god@gmail.com",
    password: bcrypt.hashSync("eminem", 10),
  },
];

export default users;
