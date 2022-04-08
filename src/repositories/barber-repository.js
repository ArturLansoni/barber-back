"use strict";
const { barberModel } = require("../domain");

const loadAll = () => barberModel.find().select("-password -__v");

const loadByParams = (params, selectAll) =>
  barberModel.findOne(params).select(selectAll ? "" : "-password -__v");

const create = (barber) => barberModel.create(barber);

const updateByParams = (params, barber) =>
  barberModel.updateOne(params, barber);

module.exports = {
  loadAll,
  loadByParams,
  create,
  updateByParams,
};
