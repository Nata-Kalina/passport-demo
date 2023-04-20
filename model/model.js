const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide name"],
  },
  password: {
    type: String,
    required: [true, "Please rpovide password"],
  },
});

module.exports = mongoose.model("Users", User);
