"use strict";
const { clientModel } = require("../domain");

const load = () => clientModel.find();

const add = (client) => clientModel.create(client);

module.exports = {
  load,
  add,
};
