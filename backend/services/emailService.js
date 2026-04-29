const Article = require("../models/Article");
const User = require("../models/User");
const groupByTopic = require("../utils/groupByTopic");
const { generateEmailTemplate } = require("./emailTemplateService");
const { sendEmail } = require("./mailer");

const sendDigestEmailToUser = async (user) => {
  const articles = await Article.find({
    topic: { $in: user.topics },
    isSummarized: true,
    isSentimentAnalyzed: true
  })
    .sort({ createdAt: -1 })
    .limit(10);

  if (!articles.length) return;

  const groupedArticles = groupByTopic(articles);

  const html = generateEmailTemplate({
    userEmail: user.email,
    groupedArticles
  });

  await sendEmail({
    to: user.email,
    subject: "📰 Your Personalized News Digest",
    html
  });
};

const sendDigestToAllUsers = async () => {
  const users = await User.find();

  for (const user of users) {
    await sendDigestEmailToUser(user);
  }

  return users.length;
};

module.exports = { sendDigestToAllUsers };