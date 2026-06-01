import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = Router();

router.route('/notes').get(getAllNotes).post(createNote);

router
  .route('/notes/:noteId')
  .get(getNoteById)
  .patch(updateNote)
  .delete(deleteNote);

export default router;
