import User from "../model/User_model.js";
// node.js default module 
import crypto from "crypto"
import nodemailer from "nodemailer";

export const registerUser = async (req,res)=>{
    //  get data
    const {name, email,password} = req.body
    // validate    
    if(!name || !email || !password){
        return res.status(200).json({
            message: "All filed are required"
        });
    }


    try {
     const existingUser = await User.findOne({email})   // check user alredy exits or not
     if(existingUser){
        return res.status(400).json({
            message : "user alredy exists or not"
        })
     }     
    // create a user in database
    
    //  otherwise create a new user;
     const user = await User.create({
        name,
        email,
        password,
     })
     console.log(user);
     
     if(!user){ 
        return res.status(400).json({
            message : "User not Registered"
        })
     }

   
     const token =  crypto.randomBytes(32).toString("hex");
     console.log(token);


      // save the token in database;
     user.verificationToken= token; //check the field , ki verification fild database me he yea nehi
    await user.save() // then save the user in database

      // send token as email to user
     const transporter = nodemailer.createTransport({
        host:process.env.MAILTRAP_HOST,
        port:process.env.MAILTRAP_PORT,
        secure:false, //true for port 45, false for other ports
        auth :{
            user : process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASSWORD
        }
     });
     const mailOption ={
        from: process.env.MAILTRAP_SENDEREMAIL, // sender address
        to: user.email, // list of receivers
        subject: "Verify your email", // Subject line
        text: `please click the following link${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body 
     };


    await transporter.sendMail(mailOption);
        // send sucess status to user
        res.status(201).json({
            message : "User registered sucessfully",
            success:true
        })
    } catch (error) {
        res.status(400).json({
            message : "User not registered",
            error,
            success:true 
        })
    }
    

};


export const verifyUser = async (req, res)=>{
    // get token from url
    const {token} = req.params;
    console.log(token);
    if(!token){
        return res.status(400).json({
            message:"invalid token"
        })
    }
    

    // validate token
    const user = await User.findOne({verificationToken:token})

    // find user based on token
    if(!user){
        return res.status(400).json({
            message :"invalid token"
        })
    }

    // set isVerified field to true
    user.isVerified = true;

    // remove verification token
    user.verificationToken = null;
    await user.save()
    // Return response

}
