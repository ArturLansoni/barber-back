"use strict";
const barberValidator = require("./barber-validator");
const clientValidator = require("./client-validator");
const offerValidator = require("./offer-validator");
const serviceValidator = require("./service-validator");
const scheduleValidator = require("./schedule-validator");

module.exports = {
  barberValidator,
  clientValidator,
  offerValidator,
  serviceValidator,
  scheduleValidator,
};
