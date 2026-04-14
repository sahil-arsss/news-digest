const axios = require("axios");
const cheerio = require("cheerio");

const scrapeTechNews = async () => {
  try {
    const { data } = await axios.get("https://techcrunch.com", {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);
    const articles = [];

    $("a.loop-card__title-link").each((i, el) => {
      if (i >= 10) return false;

      const title = $(el).text().trim();
      const link = $(el).attr("href");

      if (title && link) {
        articles.push({
          title,
          link,
          topic: "tech",
          source: "TechCrunch",
          scrapedAt: new Date()
        });
      }
    });

    console.log(articles);
    return articles;

  } catch (error) {
    console.error("Tech scraper error:", error.message);
    return [];
  }
};

module.exports = scrapeTechNews; 