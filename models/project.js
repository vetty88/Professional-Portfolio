const express  = require('express'), app = express(), mongoose = require('mongoose');
require('dotenv').config(); // configures dotenv
app.use(express.json());
// MongoDB connection with ATLAS and Mongoose
// connects to the value within the .env file
const uri = process.env.ATLAS_URI;
// connects mongoose to the uri and sets some mongoose keys to true to combat mongoose's deprecation warnings
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
// make sure that MongoDB connected successfully
connection.once('open', () => {
console.log("MongoDB database connected!!");
});

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
