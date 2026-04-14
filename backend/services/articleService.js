const Article = require("../models/Article");

const saveArticle = async (articles) => {
  for (const article of articles) {
    try {
      await Article.create(article);

    } catch (err) {
      if (err.code !== 11000) {
        console.error("Article save error:", err.message);
      }
    }
  }
};
module.exports=saveArticle;