import express from 'express';
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';

const router = express.Router();

//Get and post routes
router.get('/', getAllEvents);
router.post('/', createEvent);

// Put and Delete Routes
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
