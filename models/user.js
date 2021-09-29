const { v4: uuidv4 } = require("uuid");
const uniqueValidator = require("mongoose-unique-validator");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String },

  name: { type: String },

  userName: { type: String },

  email: { type: String, unique: true },

  phone: { type: String },
});

userSchema.pre(
  "save",
  function (next) {
    this.userId = uuidv4();
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

const user = mongoose.model("User", userSchema);

module.exports = user;
