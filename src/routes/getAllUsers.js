var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  User.findAll()
    .then((users) => {
      return res.json({
        success: true,
        msg: "User List Fetched",
        users: users,
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        msg: "fetch failed",
        err: err,
      });
    });
});

module.exports = router;
