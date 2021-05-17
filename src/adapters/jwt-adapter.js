"use strict";
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/env");

const encrypt = async (value) => {
  return jwt.sign({ id: value }, jwtSecret);
};

const decrypt = async (token) => {
  return await jwt.verify(token, jwtSecret);
};

module.exports = {
  encrypt,
  decrypt,
};
