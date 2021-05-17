"use strict";
const { barberModel } = require("../domain");

const load = () => barberModel.find().select("-password -__v");

const loadById = (_id = "") =>
  barberModel.findOne({ _id }).select("-password -__v");

const loadByEmail = (email = "") => barberModel.findOne({ email });

const add = (barber) => barberModel.create(barber).select("-password -__v");

module.exports = {
  load,
  loadById,
  loadByEmail,
  add,
};
