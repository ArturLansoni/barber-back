"use strict";
const { Types } = require("mongoose");
const { serviceModel } = require("../domain");

const loadAll = () => serviceModel.find();

const loadByParams = (params) => serviceModel.find(params);

const create = (service) => serviceModel.create(service);

const remove = (serviceId) =>
  serviceModel.deleteOne({ _id: Types.ObjectId(serviceId) });

const updateByParams = (params, service) =>
  serviceModel.updateOne(params, service);

module.exports = {
  loadAll,
  loadByParams,
  create,
  remove,
  updateByParams,
};
