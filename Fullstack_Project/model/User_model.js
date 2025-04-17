import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email : String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    veficationToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date,
    },
    resetpasswordToken:{
        type:String,
    }
},{
    timestamps:true
});

export const User = mongoose.model("User",UserSchema);

