"use strict";
const { Router } = require("express");
const router = Router();

const barberRoutes = require("./barber-routes");

module.exports = (app) => {
  app.use("/", router);
  barberRoutes(router);
};
