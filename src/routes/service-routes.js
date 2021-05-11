"use strict";
const { serviceController } = require("../controllers");

module.exports = (app) => {
  app.get("/service", serviceController.load);
  app.post("/service", serviceController.add);
};
