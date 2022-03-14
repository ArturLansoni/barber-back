"use strict";
const { clientModel } = require("../domain");

const loadAll = () => clientModel.find();

const loadByParams = (params) => clientModel.findOne(params);

const create = (client) => clientModel.create(client);

module.exports = {
  loadAll,
  loadByParams,
  create,
};
