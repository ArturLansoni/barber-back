"use strict";
const { clientController } = require("../controllers");
const auth = require("../middlewares/auth-middleware");

module.exports = (app) => {
  app.get("/client", auth, clientController.load);
  app.post("/client", clientController.add);
  app.post("/client/login", clientController.login);
};
