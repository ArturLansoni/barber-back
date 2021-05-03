"use strict";
const Mongoose = require("mongoose");

const client = new Mongoose.Schema({
  name: { type: String },
  telephone: { type: String },
  email: { type: String },
  image: { type: String },
  createdAt: { type: String },
});

module.exports = Mongoose.model("client", client);
