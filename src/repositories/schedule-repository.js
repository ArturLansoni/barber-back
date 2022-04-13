"use strict";
const { scheduleModel } = require("../domain");

const loadAll = () => scheduleModel.find().select("-password -__v");

const create = (schedule) => scheduleModel.create(schedule);

const loadByParams = (params) => scheduleModel.findOne(params);

const updateByParams = (params, schedule) =>
  scheduleModel.updateOne(params, schedule);

const removeByParams = (params) => scheduleModel.deleteOne(params);

module.exports = {
  loadAll,
  loadByParams,
  create,
  updateByParams,
  removeByParams,
};
