module.exports = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/barber",
  jwtSecret: process.env.JWT_SECRET || "^u:]v!kJ=py8Z?aR3tIf?(_wA([qHM",
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID || "",
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN || "",
};
