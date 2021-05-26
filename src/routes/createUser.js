var express = require("express");
var router = express.Router();
const User = require("../models/User");
const uidGenrate = require("../helper/uidGenrator");
const userValidator = require("../middlewares/userValidator");

router.post("/", userValidator, function (req, res, next) {
  let payload = req.payload;

  const userName = payload.userName;
  const userData = payload.userData;
  const userdate = payload.date;
  const userIsActive = payload.isActive;
  const uid = uidGenrate();

  User.create({
    uid: uid,
    username: userName,
    data: userData,
    date: userdate,
    isActive: userIsActive,
  })
    .then((result) => {
      return res.json({
        success: true,
        msg: "User Created Successfully !",
      });
    })
    .catch((err) => {
      return res.json({
        success: false,
        msg: "User Creation Fail !",
      });
    });
});

module.exports = router;
