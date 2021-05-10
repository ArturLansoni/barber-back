"use strict";
const { barberModel } = require("../domain");

const load = () => barberModel.find();

const add = (barber) => barberModel.create(barber);

module.exports = {
  load,
  add,
};
