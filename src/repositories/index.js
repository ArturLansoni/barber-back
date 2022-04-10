"use strict";
const barberRepository = require("./barber-repository");
const clientRepository = require("./client-repository");
const serviceRepository = require("./service-repository");
const offersRepository = require("./offers-repository");
const scheduleRepository = require("./schedule-repository");

module.exports = {
  barberRepository,
  clientRepository,
  serviceRepository,
  offersRepository,
  scheduleRepository,
};
