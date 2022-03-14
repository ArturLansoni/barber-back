"use strict";
const { offersModel } = require("../domain");
const mongoose = require("mongoose");

const loadAll = () => offersModel.find().select("-password -__v");

const loadByParams = (params) => offersModel.find(params).populate("serviceId");

const create = ({ barberId, serviceId }) =>
  offersModel.create({
    barberId: mongoose.Types.ObjectId(barberId),
    serviceId: mongoose.Types.ObjectId(serviceId),
  });

const removeByParams = (params) => offersModel.deleteOne(params);

module.exports = {
  loadAll,
  loadByParams,
  create,
  removeByParams,
};
