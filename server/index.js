import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});