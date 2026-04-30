const Parser = require("rss-parser");
const parser = new Parser();

const scrapeSports = async () => {
  try {
    const feed = await parser.parseURL(
      "https://www.espn.com/espn/rss/news"
    );

    return feed.items.slice(0, 5).map(item => ({
      title: item.title,
      link: item.link,
      topic: "sports",
      source: "ESPN",
      scrapedAt: new Date()
    }));

  } catch (error) {
    console.error("Sports RSS error:", error.message);
    return [];
  }
};

module.exports = scrapeSports;  