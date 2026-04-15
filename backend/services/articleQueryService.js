const Article=require("../models/Article");

const getArticle= async ({topic , limit=10})=>{
    const filter={};
    if(topic)
    {
        filter.topic=topic;
    }
    const temp= await Article.find(filter).sort({createdAt : -1}).limit(limit).select("-__v");
    
    return temp;
};


module.exports= {getArticle};