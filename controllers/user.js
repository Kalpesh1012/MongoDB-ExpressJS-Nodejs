const User=require("../models/user")

const getAllUsers=async(req,res)=>{
    const myData=await User.find({});
    res.status(200).json({myData});
}

const getAllUsersTesting=async(req,res)=>{
    res.status(200).json({msg:"I am getting testing user"});
}

module.exports={getAllUsers,getAllUsersTesting}