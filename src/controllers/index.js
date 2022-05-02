"use strict";
const barberClientController = require("./barber-client-controller");
const barberController = require("./barber-controller");
const clientController = require("./client-controller");
const serviceController = require("./service-controller");
const offersController = require("./offers-controller");
const scheduleController = require("./schedule-controller");

module.exports = {
  barberClientController,
  barberController,
  clientController,
  serviceController,
  offersController,
  scheduleController,
};
