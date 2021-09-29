const Joi = require("joi");
const joi = require("joi");

const validatePost = (req, res, next) => {
  const schema = Joi.object({
    task: Joi.string().required(),
    completed: Joi.boolean().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in todo data",
      error: result.error,
    });
  }
  next();
};
const validatePut = (req, res, next) => {
  const schema = Joi.object({
    task: Joi.string().required(),
    completed: Joi.boolean().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).send({
      message: "Error in todo data",
      error: result.error,
    });
  }
  next();
};

module.exports = {
  validatePost,
  validatePut,
};
