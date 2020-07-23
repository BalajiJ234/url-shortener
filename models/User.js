const mongoose = require("mongoose");

//Create Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  urls_created: {
    type: Array,
    default: []
  }
},
{ timestamps: true}
)

module.exports = User = mongoose.model("users", userSchema);