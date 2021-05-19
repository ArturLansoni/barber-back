"use strict";
const { clientModel } = require("../domain");

const load = () => clientModel.find();

const loadByEmail = (email) => clientModel.find({ email });

const add = (client) => clientModel.create(client);

module.exports = {
  load,
  loadByEmail,
  add,
};
