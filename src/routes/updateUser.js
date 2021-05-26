var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  const userName = req.body.userName;
  const updateisActive = req.body.isActive;

  User.findOne({ where: { username: userName } })
    .then((user) => {
      user.isActive = updateisActive;
      user.save();
    })
    .then((result) => {
      return res.json({
        success: true,
        msg: "User Updated",
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        msg: "User id not found",
        err: err,
      });
    });
});

module.exports = router;
