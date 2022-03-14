"use strict";
const Mongoose = require("mongoose");

const barber = new Mongoose.Schema({
  name: { type: String },
  address: {
    zipCode: { type: String },
    number: { type: String },
    street: { type: String },
    neighborhood: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    complement: { type: String },
  },
  telephone: { type: String },
  email: { type: String },
  password: { type: String },
  image: { type: String },
  createdAt: { type: Number },
  updatedAt: { type: Number },
});

module.exports = Mongoose.model("barber", barber);
