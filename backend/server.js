const dotenv=require("dotenv");
dotenv.config();
const express=require("express");
const connectDB=require("./config/db");
const userRoutes=require("./routes/userRoutes");
const scrapeRoutes=require("./routes/scrapeRoutes")
const articleRoutes=require("./routes/articleRoutes");
const aiRoutes=require("./routes/aiRoutes");
const sentimentRoutes=require("./routes/sentimentRoutes");
const emailPreviewRoutes = require("./routes/emailPreviewRoutes");
const emailRoutes = require("./routes/emailRoutes");
const startDailyJob = require("./cron/dailyJob");
const startWeeklyJob = require("./cron/weeklyJob");
const unsubscribeRoutes = require("./routes/unsubscribeRoutes");
const preferencesRoutes = require("./routes/preferencesRoutes");

const app=express();
app.use(express.json());
 
connectDB();
  
app.get("/",(req,res)=>{
    res.send("news digest is running");
})

app.use("/api/users",userRoutes);
app.use("/api",scrapeRoutes);
app.use("/api",articleRoutes);
app.use("/api",aiRoutes); 
app.use("/api",sentimentRoutes);
app.use("/api", emailPreviewRoutes); // for testing purpose 
app.use("/api", emailRoutes);

app.use("/api", unsubscribeRoutes);
app.use("/api", preferencesRoutes);

startDailyJob();
startWeeklyJob();

const PORT= process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running  on port ${PORT}`);
    

})