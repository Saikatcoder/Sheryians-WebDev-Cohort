import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = ()=>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>{
    console.log("connection to mongodb");
})
.catch((err)=>{
    console.log("Error connecting to mongodb");
})
}

export default db;
