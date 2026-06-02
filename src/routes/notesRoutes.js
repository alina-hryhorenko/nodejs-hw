import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use(authenticate);

router
  .route('/notes')
  .get(celebrate(getAllNotesSchema), getAllNotes)
  .post(celebrate(createNoteSchema), createNote);

router
  .route('/notes/:noteId')
  .get(celebrate(noteIdSchema), getNoteById)
  .patch(celebrate(updateNoteSchema), updateNote)
  .delete(celebrate(noteIdSchema), deleteNote);

export default router;
