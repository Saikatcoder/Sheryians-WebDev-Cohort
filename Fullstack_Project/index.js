import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./utils/db.js";

// express inilized
const app = express()
dotenv.config();

app.use(cors({
    origin : process.env.BASE_URL,
    methods : ['GET','POST',"DELETE","OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))  // latest version support for extended :true


const port = process.env.PORT || 4000;


app.get('/',(req, res)=>{
    res.send("hellow world")
})

// connect to db
db();

// listem port
app.listen(port,()=>{
    console.log(`appp is listening port number${port}`);
})



