const NotFoundError = require("../errors/not-found");
const BadRequestError = require("../errors/bad-request");

const Members = require("../models/Members");

const historyTracker = async (req, res, next) => {
  let method = null;
  if (req.body.user ===)
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
  const history = await History.find({
    _id: req.body.id
  });
  req.typeOfAction = method;
  if (!history) {
    throw new BadRequestError("something is wrong with your query");
  }
  history.admin === true && req.typeOfAction === 
  next();
};

module.exports = historyTracker;
