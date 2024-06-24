const Joi = require('joi');

//Object schema validation by joi library

const userSchema = joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(18).max(65).required(),
  city: Joi.string().required(),
  zipCode: Joi.string().pattern(/^\d{5}$/).required(),
  password: Joi.string().min(6).required()

});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateUser;