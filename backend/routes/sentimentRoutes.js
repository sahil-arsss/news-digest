const express=require("express")
const router=express.Router();
const {analyzeSentiments}=require("../services/sentimentService");
router.get("/sentiment",async(req,res)=>{

    try
    {
        const count=await analyzeSentiments(5);
        res.json({
            message: "sentiment analysis completed",
            analyzeSentiments: count
        });
    }
    catch(err)
    {
        res.status(500).json({
            message:"sentimental analysis error",
            error:err.message
        })
    }
})
 
module.exports=router;