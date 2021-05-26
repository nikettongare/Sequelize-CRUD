var express = require("express");
var router = express.Router();
const User = require("../models/User");
const inputValidate = require("../middlewares/uidValidator");

router.get("/", inputValidate, function (req, res, next) {
  let payload = req.payload;
  const userID = payload.uid;

  User.findOne({ where: { uid: userID } })
    .then((user) => {
      console.log(user);
      res.json({
        success: true,
        msg: "User Data Fetched",
        users: user,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        msg: "User id not found",
        err: err,
      });
    });
});

module.exports = router;
