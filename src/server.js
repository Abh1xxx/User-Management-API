const express=require("express")
const { dbconnection } = require("./Config/db")
const userRouter = require("./routes/userRoutes")

const app=express()

app.use(express.json())

dbconnection()


app.get("/",(req,res)=>{
    res.send("Welcome to the root of the server. The API is up and running!");
    console.log("Root route accessed --> Server responded successfully.");
    console.log("--------------------------------------------------");
  })

app.use("/user",userRouter)

// when next is called in /user then the below  line of code starts executes
app.use((error,req,res,next)=>{
    try {
      const errormessage=error.message ||"Internal Error"
      const statusCode=error.statusCode||500
      console.log("Something went wrong");
       return res.status(statusCode).json({Error:errormessage||"Something went wrong"})
    } catch (error) {
      return res.status(error.status||500).json({Error:error.message||"Something went wrong"})
    }
  })
  


const PORT=4999
app.listen(PORT,()=>{
     console.log("--------------------------------------------------");
    console.log(`🚀 Server is running --> http://localhost:${PORT}`);
    console.log("--------------------------------------------------");
    
    
})