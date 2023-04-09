const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
