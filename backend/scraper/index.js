const scrapeTechNews= require("./techScraper");
const scrapeAI = require("./aiScraper");
const scrapeFinance = require("./financeScraper");
const scrapeSports = require("./sportsScraper");


const runScrapers = async () => {
  try {
    
    const [techArticles, aiArticles, financeArticles, sportsArticles] =
      await Promise.all([
        scrapeTechNews(),
        scrapeAI(),
        scrapeFinance(),
        scrapeSports()
      ]);

    const allArticles = [
      ...techArticles,
      ...aiArticles,
      ...financeArticles,
      ...sportsArticles
    ];

    
    allArticles.sort(
      (a, b) => new Date(b.scrapedAt) - new Date(a.scrapedAt)
    );

    return allArticles;

  } catch (error) {
    console.error("Error running scrapers:", error.message);
    return [];
  }
};

module.exports = runScrapers;