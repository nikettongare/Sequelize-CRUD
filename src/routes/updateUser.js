var express = require("express");
var router = express.Router();
const User = require("../models/User");
const inputValidate = require("../middlewares/uidValidator");

router.get("/", inputValidate, function (req, res, next) {
  let payload = req.payload;
  const userID = payload.uid;
  const updateisActive = payload.isActive;

  User.findOne({ where: { uid: userID } })
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
