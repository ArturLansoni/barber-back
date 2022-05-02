"use strict";
const { barberClientController } = require("../controllers");
const { authMiddleware: auth } = require("../middlewares");

module.exports = (app) => {
  app.get("/me", auth, barberClientController.loadCurrentUser);
  app.post("/login", barberClientController.login);
};
