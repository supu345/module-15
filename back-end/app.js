const express = require("express");
const router = require("./src/route/api");
const app = new express();
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

//Security
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//JSON Parser
app.use(bodyParser.json());

//Rate Limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//Database Connection
let URI =
  "mongodb+srv://supu345:<password>@cluster0.fcgjuvw.mongodb.net/CRUD?retryWrites=true&w=majority";
let OPTION = { user: "supu345", pass: "user123", autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log(" DB connected Success");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
