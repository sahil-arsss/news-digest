const express=require("express");
const { route } = require("./userRoutes");
const router=express.Router();
const runScrapers =require("../scraper/index");
const saveArticles=require("../services/articleService");
router.get("/scrape",async(req,res)=>{

    try{
        const articles=await runScrapers();
        await saveArticles(articles);
        res.json({
            message : "scrapping completed",
            total: articles.length
        });
    }catch(err)
    {
        res.status(500).json({
            message : "scrapping failed",
            error : err.message
        });
    }
})
module.exports= router;