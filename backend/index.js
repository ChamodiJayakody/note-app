import express from "express";
import cors from "cors";
import { connection } from "./db.js";
import dotenv from "dotenv";
import noteRouter from "./routes/note.route.js"

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/note", noteRouter)

app.get("/", (req, res) => {
  res.send({
    message: "api is working now",
  });
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("database is connected");
  } catch (error) {
    console.log("error connecting to the database");
  }

  console.log("Server is running on port number", port);
});
