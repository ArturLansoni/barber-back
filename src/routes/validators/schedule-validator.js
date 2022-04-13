"use strict";
const { body } = require("express-validator");

const makeCreateScheduleValidator = () => {
  return [
    body("offersId")
      .isString()
      .withMessage("O parâmetro 'offersId' é obrigatório"),
    body("clientId")
      .isString()
      .withMessage("O parâmetro 'clientId' é obrigatório"),
    body("date").isInt().withMessage("O parâmetro 'date' é obrigatório"),
    body("paymentType")
      .isString()
      .withMessage("O parâmetro 'paymentType' é obrigatório"),
  ];
};

module.exports = {
  makeCreateScheduleValidator,
};
