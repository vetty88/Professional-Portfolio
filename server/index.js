import express from 'express';
import path from 'path';

const app = express(); // create express app
let __dir = path.resolve();

// add middlewares
app.use(express.static(path.join(__dir, "..", "build")));
app.use(express.static("public"));
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});