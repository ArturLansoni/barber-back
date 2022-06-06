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
  app.get("/schedule/me", auth, scheduleController.loadByCurrentUser);
  app.get("/schedule/:scheduleId", auth, scheduleController.loadById);
  app.put("/schedule/:scheduleId", auth, scheduleController.update);
  app.post(
    "/schedule",
    ...makeCreateScheduleValidator(),
    validator,
    auth,
    scheduleController.create
  );
  app.delete("/schedule/:scheduleId", auth, scheduleController.remove);
};
