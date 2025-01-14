import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import noteRoutes from "./routes/note.route.js";
//import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from "body-parser";

dotenv.config();

// console.log('Loaded Environment Variables:');
// console.log('MONGO:', process.env.MONGO);
// console.log('JWT_SECRET:', process.env.JWT_SECRET);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected!");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);
//app.use("/api/post", postRoutes);

//for payhere payment gateway
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../refaa-client/dist")));

app.use((err, req, res, next) => {
  console.error("Error occurred:", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../refaa-client/dist/index.html"));
});