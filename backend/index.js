import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userModel from "./models/user.model.js";

dotenv.config();
mongoose.connect(
  'mongodb://localhost:27017/users'
);

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/sign-in",(req,res)=>{
  const {email,password}=req.body;
  userModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      } else{
        res.json("the password is incorrect")
      }
    }else{
      res.json("No record existed")
    }
  })
})

app.post("/sign-up", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// app.get("/", (req, res) => {
//   res.send({
//     message: "api is working now",
//   });
// });

app.listen(port, () => {
  console.log("server is running");
});
