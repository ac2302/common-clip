// envinronment variables
require("dotenv").config();

// requiring node modules
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

// configuring app and middleware
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// globals
let clip = "hello, world!";

// listen
app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});

// serving the page
app.get("/", (req, res) => {
	res.render("index", { clip: clip });
});
