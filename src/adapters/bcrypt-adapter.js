"use strict";
const bcrypt = require("bcrypt");

const hash = async (value) => {
  return await bcrypt.hash(value, 12);
};

const compare = async (value, hash) => {
  return await bcrypt.compare(value, hash);
};

module.exports = {
  hash,
  compare,
};
