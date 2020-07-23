const mongoose = require("mongoose");

//Create Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
  },
  urls_created: {
    type: Array,
    default: []
  }
},
{ timestamps: true}
)

module.exports = mongoose.model("User", userSchema)