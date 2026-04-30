const cron = require("node-cron");
const runScrapers = require("../scraper");
const saveArticles = require("../services/articleService");
const { summarizeArticle } = require("../services/summarizationService");
const { analyzeSentiments } = require("../services/sentimentService");
const { sendDigestToAllUsers } = require("../services/emailService");

const startDailyJob = () => {
  // Scrape at 7:00 AM
  cron.schedule("0 7 * * *", async () => {
    console.log(" Daily Scraping Started");
    const articles = await runScrapers();
    await saveArticles(articles);
  });

  // Summarize at 7:10 AM
  cron.schedule("10 7 * * *", async () => {
    console.log("AI Summarization Started");
    await summarizeArticle(10);
  });

  // Sentiment at 7:20 AM
  cron.schedule("20 7 * * *", async () => {
    console.log("Sentiment Analysis Started");
    await analyzeSentiments(10);
  });

  // Email at 8:00 AM
  cron.schedule("0 8 * * *", async () => {
    console.log("Sending Daily Emails");
    await sendDigestToAllUsers("daily");
  });
};

module.exports = startDailyJob;



// const cron = require("node-cron");
// const runScrapers = require("../scraper");
// const saveArticles = require("../services/articleService");
// const { summarizeArticle } = require("../services/summarizationService");
// const { analyzeSentiments } = require("../services/sentimentService");
// const { sendDigestToAllUsers } = require("../services/emailService");

// const startDailyJob = () => {
//   // Scrape at 00:24
//   cron.schedule("24 0 * * *", async () => {
//     console.log("Daily Scraping Started");
//     const articles = await runScrapers();
//     await saveArticles(articles);
//   });

//   // Summarize at 00:26
//   cron.schedule("26 0 * * *", async () => {
//     console.log("AI Summarization Started");
//     await summarizeArticle(10);
//   });

//   // Sentiment at 00:28
//   cron.schedule("28 0 * * *", async () => {
//     console.log("Sentiment Analysis Started");
//     await analyzeSentiments(10);
//   });

//   // Email at 00:30
//   cron.schedule("30 0 * * *", async () => {
//     console.log("Sending Daily Emails");
//     await sendDigestToAllUsers("daily");
//   });
// };

// module.exports = startDailyJob;