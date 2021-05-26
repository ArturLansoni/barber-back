require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const setupRouter = require("./routes");
const setupDatabase = require("./config/database");
const corsMiddleware = require("./middlewares/cors-middleware");
const { port } = require("./config/env");

setupDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMiddleware);
setupRouter(app);

app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});
