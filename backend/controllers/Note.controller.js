import Note from '../models/note.model.js';
import { errorHandler } from '../utils/error.js';

export const createNote = async (req, res, next) => {
  
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
    
  const newNote = new Note({
    ...req.body,
    slug,
    user: req.user.id,
  });

  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.id }).populate('user', 'username');
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.noteId, user: req.user.id }).populate('user', 'username');
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.noteid, user: req.user.id });
    if (!note) {
      return next(errorHandler(404, 'Note not found'));
    }
    res.status(200).json('The Note has been deleted');
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.noteId, user: req.user.id },
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          isPinned: req.body.isPinned,
        },
      },
      { new: true }
    );
    if (!updatedNote) {
      return next(errorHandler(404, 'Note not found'));
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const pinNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.noteId, user: req.user.id });
    if (!note) {
      return next(errorHandler(404, 'Note not found'));
    }
    note.isPinned = !note.isPinned;
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};