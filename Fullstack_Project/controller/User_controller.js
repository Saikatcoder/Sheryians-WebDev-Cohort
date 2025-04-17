import { User } from "../model/User_model.js";
// node.js default module 
import crypto from "crypto"
export const registerUser = async (req,res)=>{
    //  get data
    const {name, email,password} = req.body
    // validate
    if(!name || !email || !password){
        return res.status(200).json({
            message: "All filed are required"
        });
    }

    // check if user alredy exits in database
    try {
     const existingUser = await User.findOne({email})   // check user alredy exits or not
     if(existingUser){
        return res.status(400).json({
            message : "user alrey exits or not"
        })
     }     
    // create a user in database
     if(!user){ // check user is present or not in databse
        return res.status(400).json({
            message : "User not Registered"
        })
     }
     const user = await User.create({
        name,
        email,
        password,
     })
     // token generate for varification
     const token =  crypto.randomBytes(32).toString("hex");
     console.log(token);
      // save the token in database;
     user. veficationToken = token;
    await user.save()

    } catch (error) {
        
    }
    
    
   
   


    // send token as email to user

    // send sucess status to user


};

