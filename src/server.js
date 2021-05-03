const mongoose = require("mongoose");
const express = require("express");
const app = express();
const employees = require("./model");
const router = express.Router();
const port = 4000;

const uri = "mongodb://localhost:27017/kennel";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

router.route("/insert").post((req, res) => {
  const data = [
    {
      name: "John",
      age: 21,
      location: "New York",
    },
    {
      name: "Smith",
      age: 27,
      location: "Texas",
    },
    {
      name: "Lisa",
      age: 23,
      location: "Chicago",
    },
  ];

  employees.insertMany(data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.route("/").get((req, res) => {
  employees.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.use("/", router);

app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});
