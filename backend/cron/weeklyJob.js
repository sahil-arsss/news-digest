const cron = require("node-cron");
const { sendDigestToAllUsers } = require("../services/emailService");

const startWeeklyJob = () => {
  // Sunday 9:00 AM
  cron.schedule("0 9 * * 0", async () => {
    console.log("Sending Weekly Emails");
    await sendDigestToAllUsers("weekly");
  });
};

module.exports = startWeeklyJob;