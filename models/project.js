const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  subtitle: String,
  description: String,
  weblink: String,
  datelastupdated: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
