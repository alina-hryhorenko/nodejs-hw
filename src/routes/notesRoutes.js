import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = Router();

router.route('/').get(getAllNotes).post(createNote);

router.route('/:noteId').get(getNoteById).patch(updateNote).delete(deleteNote);

export default router;
