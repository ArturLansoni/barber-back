"use strict";
const { offersController } = require("../controllers");

module.exports = (app) => {
  app.get("/offers/:barberId", offersController.loadByBarberId);
};
