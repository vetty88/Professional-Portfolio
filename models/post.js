const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Projectschema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const PROJECT = mongoose.model("PROJECT", Projectschema);

module.exports = PROJECT;
