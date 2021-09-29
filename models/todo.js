const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: { type: String },

  completed: { type: Boolean },
});

const todo = mongoose.model("Todo", todoSchema);

module.exports = todo;
