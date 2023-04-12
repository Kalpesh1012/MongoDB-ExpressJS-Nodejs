require("dotenv").config() 


require("dotenv").config();

const express=require("express");
const app=express()
const PORT=process.env.PORT || 2000;
app.get("/",(req,res)=>{
    res.send("HEY BUDDY");
})

const connectDB=require("./db/connect")

const user_routes=require("./routes/user")  
 
app.use("/api/user",user_routes)

const start=async()=>{
    try{
        await connectDB(process.env.DATA_BASE_URL)
        app.listen(PORT,()=>{ 
            console.log("CONNECT")
        })
    }
    catch(error){
        console.log(error)
    }
}
start();