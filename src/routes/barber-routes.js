"use strict";
const { barberController } = require("../controllers");

module.exports = (app) => {
  app.get("/barber", barberController.load);
  app.post("/barber", barberController.add);
  app.post("/barber/login", barberController.login);
};
