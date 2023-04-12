const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    LastName:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    }
})
module.exports=mongoose.model("User",userSchema)