var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  const userName = req.body.userName;

  User.findOne({ where: { username: userName } })
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      return res.json({
        success: true,
        msg: "User Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        success: false,
        msg: "User id not found",
        err: err,
      });
    });
});

module.exports = router;
