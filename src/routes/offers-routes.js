"use strict";
const { offersController } = require("../controllers");

module.exports = (app) => {
  app.get("/offers", offersController.load)
};
