const Joi = require("joi");
const joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    userName: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in user data",
      error: result.error,
    });
  }
  next();
};
const validatePut = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    userName: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in user data",
      error: result.error,
    });
  }
  next();
};

module.exports = {
  validatePost,
  validatePut,
};
