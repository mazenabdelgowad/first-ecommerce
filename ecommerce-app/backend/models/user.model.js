const mongoose = require("mongoose");
const userRoles = require("../utils/roles");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "uploads/profile",
  },
  token: {
    type: String,
  },
  role: {
    type: String,
    enum: [userRoles.USER, userRoles.ADMIN],
    default: userRoles.USER,
  },
});

module.exports = mongoose.model("User", userSchema);
