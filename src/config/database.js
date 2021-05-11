const mongoose = require("mongoose");
const { mongoUri } = require("./env");

module.exports = () => {
  mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const connection = mongoose.connection;

  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};
