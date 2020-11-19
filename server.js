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


const routes = require("./routes");
const app = express();
app.use(bodyParser.json());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/reactcms',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

// Start the API server
let server = app.listen(process.env.PORT || 3000, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});