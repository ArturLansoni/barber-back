"use strict";
const { clientController } = require("../controllers");
const {
  authMiddleware: auth,
  validatorMiddleware: validator,
} = require("../middlewares");
const {
  clientValidator: { makeCreateClientValidator },
} = require("./validators");

module.exports = (app) => {
  app.get("/client", auth, clientController.load);
  app.post(
    "/client",
    ...makeCreateClientValidator(),
    validator,
    clientController.add
  );
  app.post("/client/login", clientController.login);
};
