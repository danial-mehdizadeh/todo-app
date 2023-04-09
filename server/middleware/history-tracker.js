const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");

const History = require("../models/History");

const historyTracker = async (req, res, next) => {
  let method = null;
  const whatAction = ["CREATE-TASK", "UPDATE-TASK", "DELETE-TASK"];
  switch (req.method) {
    case "POST":
      method = whatAction[0];
      break;
    case "PATCH":
      method = whatAction[1];
      break;
    case "DELETE":
      method = whatAction[2];
  }
  if (req.method === "GET") {
    return next();
  }
  const history = await History.create({
    byUser: req.body.user,
    typeOfAction: method,
  });
  req.typeOfAction = method;
  if (!history) {
    throw new BadRequestError("something is wrong with your query");
  }
  next();
};

module.exports = historyTracker;
