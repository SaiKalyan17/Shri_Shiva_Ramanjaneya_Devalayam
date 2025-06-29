import express from 'express';
import {
    CurrentAdmin,
    answerQuery,
    createEvent,
    createGotDetails,
    deleteEvent,
    getAllQueries,
    getDonations,
    loginAdmin,
    registerAdmin,
    updateEvent
} from '../controller/adminController.js';


const router = express.Router();

// Authentication Routes
router.route('/login').post(loginAdmin);
router.route('/register').post(registerAdmin);
router.route('/current').get(CurrentAdmin);

<<<<<<< HEAD



=======
// Event Routes
>>>>>>> 2a3faaf (Updated dashboard, footer, queries view, and bug fixes)
router.route('/createevent').post(createEvent);
router.route('/deleteevent/:id').delete(deleteEvent);
router.route('/updateevent/:id').patch(updateEvent);

// Query Routes
router.route('/getAllQueries').get(getAllQueries);
router.route('/answerQuery/:id').patch(answerQuery);
<<<<<<< HEAD

// God Routes
router.route('/createGod').post(createGotDetails);


=======
router.route('/getDonations').get(getDonations);
// God Routes
router.route('/createGod').post(createGotDetails);
>>>>>>> 2a3faaf (Updated dashboard, footer, queries view, and bug fixes)

export default router;

// Event Routes
// router.route('/createevent').post(ValidateToken,createEvent);
// router.route('/deleteevent/:id').delete(ValidateToken,deleteEvent);
// router.route('/updateevent/:id').patch(ValidateToken, updateEvent);

// // Query Routes
// router.route('/getAllQueries').get(ValidateToken, getAllQueries);
// router.route('/answerQuery/:id').patch(ValidateToken, answerQuery);

// // God Routes
// router.route('/createGod').post(ValidateToken, createGotDetails);


