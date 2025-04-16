import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

app.use(cors({
    origin : "http://localhost:3000",
    methods : ['GET','POST',"DELETE","OPTIONS"],
    allowedHeaders : ['Content-Type','Authorization']
}))

app.use(express.json())

const app = express()
const port = process.env.PORT || 4000;


app.get('/',(req, res)=>{
    res.send("hellow world")
})

// console.log(process.env);

app.listen(port,()=>{
    console.log(`appp is listening port number${port}`);
})

