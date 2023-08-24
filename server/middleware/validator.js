const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");
const jwt = require("jsonwebtoken");
const Members = require("../models/Members");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new BadRequestError("No token provided");
  }
  console.log(true);

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    const { id, username } = decoded;
    console.log("id and username", id, username);
    const member = await Members.findOne({ _id: id });
    console.log("member", member);
    if (!member) {
      throw new BadRequestError("Not Authorized");
    }
    console.log("id, username", id, username);

    req.user = { id, username };
    console.log("user", req.user);

    next();
  } catch (error) {
    throw new BadRequestError("Not authorized to access this route");
  }
};

module.exports = auth;
