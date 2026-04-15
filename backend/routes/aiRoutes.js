const express=require("express")
const router=express.Router();
const {summarizeArticle} = require("../services/summarizationService");
router.get("/summarize",async (req,res)=>{
    try
    {
        const count= await summarizeArticle(5);

        res.json({
            message : "summarization complete",
            articleProcessed: count
        })

    }catch(err)
    {
        res.status(500).json({
            message : "summarization failed",
            error: err.message
        })
    }
})

module.exports =router;