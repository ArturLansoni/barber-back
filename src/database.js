const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/kennel";

module.exports = () => {
  mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};
