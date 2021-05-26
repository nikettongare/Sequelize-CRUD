var express = require("express");
var router = express.Router();
const User = require("../models/User");
const inputValidate = require("../middlewares/uidValidator");

router.post("/", inputValidate, function (req, res, next) {
  let payload = req.payload;
  const userID = payload.uid;

  User.findOne({ where: { uid: userID } })
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
      return res.json({
        success: false,
        msg: "User id not found",
        err: err,
      });
    });
});

module.exports = router;
