var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", function (req, res, next) {
  const userName = req.body.userName;
  const userData = req.body.userData;
  const userdate = req.body.date;
  const userIsActive = req.body.isActive;

  User.create({
    username: userName,
    data: userData,
    date: userdate,
    isActive: userIsActive,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));

  res.json({
    success: true,
    msg: "User Created Successfully !",
  });
});

module.exports = router;
