"use strict";
const { body } = require("express-validator");

const makeCreateServiceValidator = () => {
  return [
    body("price").isString().withMessage("O parâmetro 'price' é obrigatório"),
    body("description")
      .isString()
      .withMessage("O parâmetro 'description' é obrigatório"),
    body("estimatedTime")
      .isInt()
      .withMessage("O parâmetro 'estimatedTime' é obrigatório"),
    body("image").isString().withMessage("O parâmetro 'image' é obrigatório"),
  ];
};

module.exports = {
  makeCreateServiceValidator,
};
