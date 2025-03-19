import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import noteRoutes from "./routes/note.route.js";
import taskRoutes from './routes/task.route.js';
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

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

//for payhere payment gateway
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

// Use cors middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true // Allow cookies to be sent with requests
}));

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);
app.use('/api/task', taskRoutes);

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
