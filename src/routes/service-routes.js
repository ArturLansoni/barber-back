"use strict";
const { serviceController } = require("../controllers");
const {
  authMiddleware: auth,
  validatorMiddleware: validator,
} = require("../middlewares");
const {
  serviceValidator: { makeCreateServiceValidator },
} = require("./validators");

module.exports = (app) => {
  app.get("/service", auth, serviceController.load);
  app.post(
    "/service",
    ...makeCreateServiceValidator(),
    validator,
    auth,
    serviceController.create
  );
  app.delete("/service/:serviceId", auth, serviceController.remove);
  app.put("/service/:serviceId", auth, serviceController.update);
};
