"use strict";
const { serviceController } = require("../controllers");
const auth = require("../middlewares/auth-middleware");

module.exports = (app) => {
  app.get("/service", auth, serviceController.load);
  app.post("/service", auth, serviceController.add);
};
