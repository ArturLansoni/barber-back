"use strict";
const { offersModel } = require("../domain");
const mongoose = require("mongoose");

const load = () => offersModel.find().populate("serviceId");

const add = ({ barberId, serviceId }) =>
  offersModel.create({
    barberId: mongoose.Types.ObjectId(barberId),
    serviceId: mongoose.Types.ObjectId(serviceId),
  });

module.exports = {
  load,
  add,
};
