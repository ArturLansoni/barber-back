"use strict";
const { barberController } = require("../controllers");
const {
  barberValidator: { makeCreateBarberValidator },
} = require("./validators");
const {
  authMiddleware: auth,
  validatorMiddleware: validator,
} = require("../middlewares");

module.exports = (app) => {
  app.get("/barber", auth, barberController.load);
  app.get("/barber/me", auth, barberController.loadCurrentUser);
  app.get("/barber/:barberId", auth, barberController.loadById);
  app.post(
    "/barber",
    ...makeCreateBarberValidator(),
    validator,
    barberController.add
  );
  app.post("/barber/login", barberController.login);
};
