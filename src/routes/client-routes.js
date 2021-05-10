"use strict";
const { clientController } = require("../controllers");

module.exports = (app) => {
  app.get("/client", clientController.load)
  app.post("/client", clientController.add);
};
