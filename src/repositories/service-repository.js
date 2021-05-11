"use strict";
const { serviceModel } = require("../domain");

const load = () => serviceModel.find();

const add = (service) => serviceModel.create(service);

module.exports = {
  load,
  add,
};
