import Joi from "joi-browser";

const LogInValidation = {
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(10).required(),
};

export default LogInValidation;
