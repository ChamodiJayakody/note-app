import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  pinNote,
  //searchNotes,
} from '../controllers/note.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createNote);
router.get('/get', verifyToken, getNotes);
router.get('/get/:noteid', verifyToken, getNoteById);
router.put('/update/:noteid', verifyToken, updateNote);
router.delete('/delete/:noteid', verifyToken, deleteNote);
router.put('/pin/:noteid', verifyToken, pinNote);
//router.get('/search', verifyToken, searchNotes);

export default router;