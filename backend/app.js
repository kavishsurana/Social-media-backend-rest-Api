import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routers/blog-routes";
import router from "./routers/user-routes";

const app = express()
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)


mongoose.connect("mongodb+srv://admin:kavish0068@cluster1.6ke6aco.mongodb.net/Blog?retryWrites=true&w=majority")
.then(()=> app.listen(5000))
.then(()=>console.log("connected to database and listening to LocalHost 5000"))
.catch((err)=>{
    console.log(err)
})
