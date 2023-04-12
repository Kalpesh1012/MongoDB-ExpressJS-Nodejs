require("dotenv").config();
const connectDB=require("./db/connect");
const user=require("./models/user");

const Userjson=require("./user.json")

const start=async()=>{
    try{
       await connectDB(process.env.DATA_BASE_URL)
       await user.create(Userjson);
       console.log("Success");
    }
    catch(error){
       console.log(error);
    }
}

start();