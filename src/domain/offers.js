"use strict";
const Mongoose = require("mongoose");

const offers = new Mongoose.Schema({
  barberId: { type: Mongoose.Schema.Types.ObjectId, ref: "barber" },
  serviceId: { type: Mongoose.Schema.Types.ObjectId, ref: "service" },
});

module.exports = Mongoose.model("offers", offers);
