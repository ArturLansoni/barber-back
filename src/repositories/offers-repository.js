"use strict";
const { offersModel } = require("../domain");
const mongoose = require("mongoose");

const loadByBarberId = (barberId) =>
  offersModel
    .find({ barberId: mongoose.Types.ObjectId(barberId) })
    .populate("serviceId");

const add = ({ barberId, serviceId }) =>
  offersModel.create({
    barberId: mongoose.Types.ObjectId(barberId),
    serviceId: mongoose.Types.ObjectId(serviceId),
  });

const removeByServiceId = (serviceId) =>
  offersModel.deleteOne({ serviceId: mongoose.Types.ObjectId(serviceId) });

module.exports = {
  loadByBarberId,
  add,
  removeByServiceId,
};
