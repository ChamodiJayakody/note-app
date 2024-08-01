import express from "express";
import cors from "cors";

import dotenv from "dotenv";

import mongoose from "mongoose";
import userModel from "./models/user.model.js"

dotenv.config();
mongoose.connect("mongodb+srv://chishedu:mJXZ2pHMqVWKY6qh@cluster0.c4yclu7.mongodb.net/user")
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());



app.post('/sign-up',(req,res)=> {
   userModel.create(req,body)
   .then(users=>res.json(users))
   .catch(err=>res.json(err))
})

app.get("/", (req, res) => {
  res.send({
    message: "api is working now",
  });
});

app.listen(port, () => {
  console.log("server is running")
});
