// mongoose
const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
 Firstname: {
    type: String,
    required: true
  },
  Lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
    password: {
        type: String,
        required: true,
        unique: true
    },
  isAdmin: {
    type: string,
    default: false
  }
});

module.exports = ("User", userModel);