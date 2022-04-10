"use strict";
const Mongoose = require("mongoose");

const schedule = new Mongoose.Schema(
  {
    offersId: { type: Mongoose.Schema.Types.ObjectId, ref: "offers" },
    clientId: { type: Mongoose.Schema.Types.ObjectId, ref: "client" },
    date: { type: Number },
    paymentType: { type: String },
    isAccepted: { type: Boolean },
    createdAt: { type: Number },
    updatedAt: { type: Number },
  },
  {
    timestamps: { currentTime: () => new Date().getTime() },
  }
);

module.exports = Mongoose.model("schedule", schedule);
