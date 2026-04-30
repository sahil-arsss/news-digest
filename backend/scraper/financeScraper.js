const Parser = require("rss-parser");
const parser = new Parser();

const scrapeFinance = async () => {
  try {
    const feed = await parser.parseURL(
      "https://www.cnbc.com/id/100003114/device/rss/rss.html"
    );

    return feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      topic: "finance",
      source: "CNBC",
      scrapedAt: new Date()
    }));

  } catch (error) {
    console.error("Finance RSS error:", error.message);
    return []; 
  }
};

module.exports = scrapeFinance;