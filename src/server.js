const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const setupRouter = require("./routes");
const setupDatabase = require("./database");
const port = 4000;

setupDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
setupRouter(app);

app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});
