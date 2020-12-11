const routes = require("routes");
const express = require('express');
// const path = require('path');
const app = express();
const bodyParser = require("body-parser");

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

// Start the API server
let server = app.listen(process.env.PORT || 3000, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});