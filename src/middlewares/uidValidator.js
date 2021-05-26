const joi = require("joi");

module.exports = function (req, res, next) {
  const schema = joi.object({
    uid: joi.string().required(),
  });
  const { error, value } = schema.validate({
    uid: req.body.uid,
  });
  if (error) {
    return res.json({
      error: error.details[0].message,
    });
  }
  req.payload = req.body;
  next();
};
