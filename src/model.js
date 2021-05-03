const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employee = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    location: { type: String },
  },
  { collection: "Employees" }
);

module.exports = mongoose.model("employees", employee);
