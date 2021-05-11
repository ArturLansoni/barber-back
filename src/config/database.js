const mongoose = require("mongoose");
const { mongoUri } = require("./env");

module.exports = () => {
  mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  mongoose.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose! Disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Mongoose! Error at the connection");
  });
};
