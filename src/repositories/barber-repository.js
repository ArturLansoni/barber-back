"use strict";
const { barberModel } = require("../domain");

const load = () => barberModel.find();

const loadByEmail = (email = "") => barberModel.findOne({ email });

const add = (barber) => barberModel.create(barber);

module.exports = {
  load,
  loadByEmail,
  add,
};
