const mongoose=require("mongoose")

const dbconnection=async()=>{
    try {
       await mongoose.connect("mongodb+srv://abhiramkrajandev01:aWsOAXnZLStpwJWR@cluster0.ce2gb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database Connection successfull");
        console.log("--------------------------------------------------");

        
    } catch (error) {
        console.log(error);
        
        
    }
}
module.exports={dbconnection}

//aWsOAXnZLStpwJWR
//abhiramkrajandev01