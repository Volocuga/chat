const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = Schema({
  userName: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("chat", ChatSchema);
