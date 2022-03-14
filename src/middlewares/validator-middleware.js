"use strict";
const { validationResult } = require("express-validator");

const validatorMiddleware = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res
        .status(400)
        .send({ message: errors.array({ onlyFirstError: true })[0].msg });
      return;
    }
    next();
  } catch (e) {
    res.status(500).send({ message: "Ocorreu um erro inesperado!" });
  }
};

module.exports = validatorMiddleware;
