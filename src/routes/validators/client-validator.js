"use strict";
const { body } = require("express-validator");

const makeCreateClientValidator = () => {
  return [
    body("name").isString().withMessage("O parâmetro 'name' é obrigatório"),
    body("email")
      .isString()
      .withMessage("O parâmetro 'email' é obrigatório")
      .isEmail()
      .withMessage("O parâmetro 'email' é inválido"),
    body("telephone")
      .isString()
      .withMessage("O parâmetro 'telephone' é obrigatório"),
    body("image").isString().withMessage("O parâmetro 'image' é obrigatório"),
  ];
};

module.exports = {
  makeCreateClientValidator,
};
