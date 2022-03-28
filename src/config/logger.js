const winston = require("winston");
const expressWinston = require("express-winston");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
    }),
  ],
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.colorize({ all: true }),
    winston.format.errors({ stack: true }),
    winston.format.printf((info) => {
      if (info.meta?.stack) {
        return `${info.timestamp} ${info.message} \n ${info.meta.stack}`;
      }
      return `${info.timestamp} ${info.message}`;
    })
  ),
  exitOnError: false,
});

const setupLogger = (app) => {
  app.use(
    expressWinston.logger({
      winstonInstance: logger,
      meta: true,
      colorize: true,
      expressFormat: true,
      msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
      ignoreRoute: () => false,
    })
  );
};

const setupErrorLogger = (app) => {
  app.use(
    expressWinston.errorLogger({
      winstonInstance: logger,
    })
  );
};

module.exports = { setupLogger, setupErrorLogger };
