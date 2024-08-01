import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:String,
        lastname:String,
        email:String,
        password:String,
        cpassword:String
})

const userModel=mongoose.model("users",userSchema)
// module.exports=userModel

export default userModel;