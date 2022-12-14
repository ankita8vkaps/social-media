const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cors = require("cors");

//using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

//importing routes
const post = require("./routes/posts");
const user = require("./routes/user");

//using routes
app.use("/api/v1",post);
app.use("/api/v1",user);

module.exports = app;