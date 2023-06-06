import * as dotenv from 'dotenv' 
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routers/blog-routes";
import router from "./routers/user-routes";



const app = express()
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
})
.then(()=> app.listen(5000))
.then(()=>console.log("connected to database and listening to LocalHost 5000"))
.catch((err)=>{
    console.log(err)
})
