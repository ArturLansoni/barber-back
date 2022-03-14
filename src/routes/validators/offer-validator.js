"use strict";
const { body } = require("express-validator");

const makeCreateOfferValidator = () => {
  return [
    body("barberId")
      .isString()
      .withMessage("O parâmetro 'barberId' é obrigatório"),
    body("serviceId")
      .isString()
      .withMessage("O parâmetro 'serviceId' é obrigatório"),
  ];
};

module.exports = {
  makeCreateOfferValidator,
};
