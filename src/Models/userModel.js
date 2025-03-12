const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:15,
        required:true
    },
    email:{
        type:String, 
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    }  
})

const userModel=new mongoose.model("user",userSchema)

module.exports={userModel}