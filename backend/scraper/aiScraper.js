const Parser = require("rss-parser");
const parser = new Parser();

const scrapeAI = async () => {
  const feed = await parser.parseURL("https://towardsdatascience.com/feed/");

  return feed.items.slice(0, 5).map(item => ({
    title: item.title,
    link: item.link,    
    topic: "ai",
    source: "TDS",
    scrapedAt: new Date()
  }));
};

module.exports = scrapeAI;