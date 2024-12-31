import express from 'express';
// eslint-disable-next-line import/extensions
import AppController from '../controllers/AppController.js';
// eslint-disable-next-line import/extensions
import StudentsController from '../controllers/StudentsController.js';

/**
 * links various routes to their handlers
 */

const router = express.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
