"use strict";
const { scheduleModel } = require("../domain");

const loadAll = () => scheduleModel.find().select("-password -__v");

const create = (schedule) => scheduleModel.create(schedule);

const loadByParams = (params) => {
  return scheduleModel.aggregate([
    {
      $match: params,
    },
    {
      $lookup: {
        from: "barbers",
        localField: "barberId",
        foreignField: "_id",
        as: "barberId",
      },
    },
    {
      $lookup: {
        from: "clients",
        localField: "clientId",
        foreignField: "_id",
        as: "clientId",
      },
    },
    {
      $lookup: {
        from: "offers",
        localField: "offersId",
        foreignField: "_id",
        as: "offersId",
      },
    },
    {
      $lookup: {
        from: "services",
        localField: "offersId.serviceId",
        foreignField: "_id",
        as: "offersId",
      },
    },
  ]);
};

const loadManyByParams = (params) =>
  scheduleModel
    .find(params)
    .populate("barberId", "_id name image")
    .populate("clientId")
    .populate("offersId");

const updateByParams = (params, schedule) =>
  scheduleModel.updateOne(params, schedule);

const removeByParams = (params) => scheduleModel.deleteOne(params);

module.exports = {
  loadAll,
  loadByParams,
  loadManyByParams,
  create,
  updateByParams,
  removeByParams,
};
