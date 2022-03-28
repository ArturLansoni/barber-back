require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const setupRouter = require("./routes");
const setupDatabase = require("./config/database");
const corsMiddleware = require("./middlewares/cors-middleware");
const { port } = require("./config/env");
const { setupLogger, setupErrorLogger } = require("./config/logger");

setupDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMiddleware);
setupLogger(app);
setupRouter(app);
setupErrorLogger(app);

app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});
