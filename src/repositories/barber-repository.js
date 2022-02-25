"use strict";
const { Types } = require("mongoose");
const { barberModel } = require("../domain");

const load = () => barberModel.find().select("-password -__v");

const loadById = (_id = "") =>
  barberModel.findOne({ _id: Types.ObjectId(_id) }).select("-password -__v");

const loadByEmail = (email = "") => barberModel.findOne({ email });

const add = (barber) => barberModel.create(barber);

module.exports = {
  load,
  loadById,
  loadByEmail,
  add,
};
