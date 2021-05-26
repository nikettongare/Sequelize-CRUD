const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./src/routes/index");
const createUserRouter = require("./src/routes/createUser");
const getAllUsersRouter = require("./src/routes/getAllUsers");
const getUserRouter = require("./src/routes/getUser");
const updateUserRouter = require("./src/routes/updateUser");
const deleteUserRouter = require("./src/routes/deleteUser");

const sequelize = require("./src/Utils/database");
const User = require("./src/models/User");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/createUser", createUserRouter);
app.use("/getAllUsers", getAllUsersRouter);
app.use("/getUser", getUserRouter);
app.use("/updateUser", updateUserRouter);
app.use("/deleteUser", deleteUserRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;

  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);

  res.send("error");
});

sequelize
  .sync()
  .then((result) => {})
  .catch((err) => {});

module.exports = app;
