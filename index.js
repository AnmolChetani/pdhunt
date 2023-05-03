const express=require("express")
require('dotenv').config();

const app=express()

const PORT=process.env.PORT||3000

app.use(express.json());

app.get("/api/products",(req,res)=>{
    console.log("hello world")
    res.send(`hello`)
})

app.post("/api/users",(req,res)=>{
    const body=req.body;
    console.log("hello from post")
    res.send(`hello from post`)
})


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})