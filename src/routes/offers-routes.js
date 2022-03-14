"use strict";
const { offersController } = require("../controllers");
const { authMiddleware: auth } = require("../middlewares");
module.exports = (app) => {
  app.get("/offers/me", auth, offersController.loadByCurrentBarber);
  app.get("/offers/:barberId", auth, offersController.loadByBarberId);
};
