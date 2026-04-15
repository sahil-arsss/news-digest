const express=require("express");
const router=express.Router();
const {getArticle}=require("../services/articleQueryService");

router.get("/articles",async (req,res)=>{
    try
    {
        const { topic,limit }= req.query;
        // console.log({topic,limit});
        const articles=await getArticle({topic,limit: Number(limit) || 10 });
        res.json({
            total : articles.length,
            articles
        });
    }catch(err)
    {
        res.status(500).json({
            message: "failed to fetched article",
            error: err
        })
    }
})
module.exports=router;