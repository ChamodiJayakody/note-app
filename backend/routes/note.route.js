import express from "express";
import { createNote } from "../controllers/Note.controller";

const noteRouter = express.Router();

noteRouter.post("/create-note", createNote);

export default noteRouter;
