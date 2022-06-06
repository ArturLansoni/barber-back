const { twilioAccountSid, twilioAuthToken } = require("../config/env");
const client = require("twilio")(twilioAccountSid, twilioAuthToken);

const sendNotification = async (body, toNumber) => {
  const response = await client.messages.create({
    body,
    from: "whatsapp:+14155238886",
    to: `whatsapp:+55${toNumber}`,
  });
  return !!response;
};

module.exports = {
  sendNotification,
};
