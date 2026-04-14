const express=require("express");
const router=express.Router();
const User=require("../models/User");

router.post("/subscribe",async ( req,res)=>{
    try
    {
        const {email,topics,frequency } =req.body;
        if(!email || !topics || !frequency )
        {
          return  res.status(400).json({
                message : "email topic frequency all are required"
            });
        }
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            return res.status(409).json({
                message : "user already Subscribed"
            })
        }
        const user = await User.create({
            email,
            topics,
            frequency
        })
        res.status(201).json({
            message : "Subscription completed",
            user
        })

    }catch(err)
    {
         res.status(500).json({
            message : "server error",
            error: err.message
        });
    }

})
module.exports =router;