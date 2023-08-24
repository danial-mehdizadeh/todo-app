const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/bad-request");
const Members = require("../models/Members");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    throw new BadRequestError("please provide email and password");
  }
  const user = await Members.findOne({ name: req.body.username });
  console.log("user", user);
  if (!user) {
    return res.status(404).json("there is no such user");
  }
  if (user?.password === req.body.password) {
    const id = user._id;

    const token = jwt.sign(
      { id, username: req.body.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    console.log(token);
    if (!token) {
      throw new BadRequestError("Something went wrong");
    }
    return res.status(200).json({ msg: "you logged in", token });
  } else {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "you have provided wron creditionals" });
  }
};

module.exports = { login };
