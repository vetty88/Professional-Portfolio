import express from 'express';
import path from 'path';

const PORT = process.env.PORT || '8080';
const app = express(); // create express app
let __dir = path.resolve();

// add middlewares
app.use(express.static(path.join(__dir, "..", "build")));
app.use(express.static("public"));
app.set("port", PORT);
// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});