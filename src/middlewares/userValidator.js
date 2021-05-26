const joi = require("joi");

module.exports = function (req, res, next) {
  const schema = joi.object({
    username: joi.string().required(),
    data: joi.object().required(),
    isActive: joi.boolean().required(),
    date: joi.date().required(),
  });
  const { error, value } = schema.validate({
    username: req.body.userName,
    data: req.body.userData,
    isActive: req.body.isActive,
    date: req.body.date,
  });
  if (error) {
    return res.json({
      error: error.details[0].message,
    });
  }
  req.payload = req.body;
  next();
};
