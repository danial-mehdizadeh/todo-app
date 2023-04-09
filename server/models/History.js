const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema({
  modifTime: {
    type: Date,
    default: Date.now(),
  },
  byUser: {
    type: String,
    required: true,
  },
  typeOfAction: {
    type: String,
    enum: ["CREATE-TASK", "UPDATE-TASK", "DELETE-TASK", null],
  },
});
module.exports = mongoose.model("History", HistorySchema);
