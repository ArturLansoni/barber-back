"use strict";
const { offersController } = require("../controllers");
const auth = require("../middlewares/auth-middleware");

module.exports = (app) => {
  app.get("/offers/:barberId", auth, offersController.loadByBarberId);
};
