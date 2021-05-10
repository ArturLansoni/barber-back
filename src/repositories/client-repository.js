"use strict";
const { clientModel } = require("../domain");

const load = () => clientModel.find();

const loadByMail = (email) => clientModel.find({email}); 

const add = (client) => clientModel.create(client);

module.exports = {
  load,
  loadByMail,
  add,
};
