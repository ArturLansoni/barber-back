"use strict";
const { scheduleController } = require("../controllers");
const {
  authMiddleware: auth,
  validatorMiddleware: validator,
} = require("../middlewares");
const {
  scheduleValidator: { makeCreateScheduleValidator },
} = require("./validators");

module.exports = (app) => {
  app.get("/schedule", auth, scheduleController.load);
  app.post(
    "/schedule",
    ...makeCreateScheduleValidator(),
    validator,
    auth,
    scheduleController.create
  );
  app.delete("/schedule/:scheduleId", auth, scheduleController.remove);
};
