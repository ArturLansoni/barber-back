"use strict";
const { Types } = require("mongoose");
const { serviceModel } = require("../models");

const load = () => serviceModel.find();

const add = (service) => serviceModel.create(service);

const remove = (serviceId) =>
  serviceModel.deleteOne({ _id: Types.ObjectId(serviceId) });

module.exports = {
  load,
  add,
  remove,
};
