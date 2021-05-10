"use strict";
const { Router } = require("express");
const router = Router();

const barberRoutes = require("./barber-routes");
const clientRoutes = require("./client-routes");

module.exports = (app) => {
  app.use("/", router);
  barberRoutes(router);
  clientRoutes(router);
};

