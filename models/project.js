const mongoose = require("mongoose");
const connection = "mongodb+srv://vetty88:fXP1EMS6Ww0nANsY@cluster0.0cv9z.gcp.mongodb.net/reactcms?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
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
