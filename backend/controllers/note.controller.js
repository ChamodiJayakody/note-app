 import Note from '../models/note.model.js';
import User from '../models/user.model.js';
import { errorHandler } from "../utils/error.js";

export const createNote = async (req, res, next) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
      user: req.user.id,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    next(err);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json(notes);
  } catch (err) {
    next(err);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return next(errorHandler(404, "Note not found!"));
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    next(err);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json("Note deleted!");
  } catch (err) {
    next(err);
  }
};

export const pinNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return next(errorHandler(404, "Note not found!"));
    note.isPinned = !note.isPinned;
    await note.save();
    res.status(200).json(note);
  } catch (err) {
    next(err);
  }
};

export const searchNotes = async (req, res, next) => {
    try {
      const { searchQuery } = req.query;
  
      const notes = await Note.find({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { content: { $regex: searchQuery, $options: 'i' } },
        ],
        user: req.user.id,
      });
  
      res.status(200).json(notes);
    } catch (err) {
      next(err);
    }
  };