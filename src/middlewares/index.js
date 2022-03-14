"use strict";
const authMiddleware = require("./auth-middleware");
const corsMiddleware = require("./cors-middleware");
const validatorMiddleware = require("./validator-middleware");

module.exports = {
  authMiddleware,
  corsMiddleware,
  validatorMiddleware,
};
