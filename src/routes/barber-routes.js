"use strict";
const { barberController } = require("../controllers");
const auth = require("../middlewares/auth-middleware");

module.exports = (app) => {
  app.get("/barber", auth, barberController.load);
  app.get("/barber/me", auth, barberController.loadCurrentUser);
  app.post("/barber", barberController.add);
  app.post("/barber/login", barberController.login);
};
