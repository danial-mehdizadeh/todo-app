const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");

const History = require("../models/History");

module.exports.getHistory = async (req, res) => {
  const history = await History.find({});
  res.status(201).json({ modifHistory: [...history] });
};
// const historyTracker = async (req, res) => {
//   let method = null;
//   const whatAction = ["CREATE-TASK", "UPDATE-TASK", "DELETE-TASK"];
//   switch (req.method) {
//     case "POST":
//       method = whatAction[0];
//     case "SWITCH":
//       method = whatAction[1];

//     case "DELETE":
//       method = whatAction[2];
//   }
//   const history = await History.create({
//     byUser: req.user,
//     typeOfAction: method,
//   });
//   req.typeOfAction = method
//   if (!history) {
//     throw new BadRequestError("something is wrong with your query");
//   }
//   next();
// };
