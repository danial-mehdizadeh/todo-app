const mongoose = require("mongoose");
const MembersSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: [18, "Your age is <18"],
    max: [130, "Something is wrong, Did you make a typo?"],
  },
  github: {
    type: String,
    minlength: 2,
    trim: true,
  },
  linkedin: {
    type: String,
    minlength: 2,
    trim: true,
  },
  language: {
    type: String,
    enum: ["fa", "eng", "ar", "de", "ru"],
    trim: true,
  },
  tasks: {
    type: Array,
  },
});
module.exports = mongoose.model("Members", MembersSchema);
