const Article=require("../models/Article");
const {summarizeText} = require("./aiClient");

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

const  summarizeArticle= async (limit=5)=>{
    const articles=await Article.find({isSummarized: false}).limit(limit);
    for(const article of articles)
    {
        try
        {
            const summary=await summarizeText(article.title);
        if(summary)
        {
            article.summary=summary;
            article.isSummarized=true;
            await article.save();
        }
        } 
        catch(err)
        {
            console.error("Summarization failed:", err.message);
        }
        // await delay(5000);
    }

    return articles.length;
}; 

module.exports={summarizeArticle}; 