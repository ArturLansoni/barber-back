"use strict";
const { Router } = require("express");
const router = Router();

const barberRoutes = require("./barber-routes");
const clientRoutes = require("./client-routes");
const serviceRoutes = require("./service-routes");
const offersRoutes = require("./offers-routes");
const scheduleRoutes = require("./schedule-routes");

module.exports = (app) => {
  app.use("/", router);
  barberRoutes(router);
  clientRoutes(router);
  serviceRoutes(router);
  offersRoutes(router);
  scheduleRoutes(router);
};
