"use strict";
const { barberModel } = require("../domain");

const loadAll = () => barberModel.find().select("-password -__v");

const loadByParams = (params, selectAll) =>
  barberModel.findOne(params).select(selectAll ? "" : "-password -__v");

const create = (barber) => barberModel.create(barber);

module.exports = {
  loadAll,
  loadByParams,
  create,
};
