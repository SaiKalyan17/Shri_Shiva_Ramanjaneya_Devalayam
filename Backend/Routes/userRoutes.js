import express from 'express';
import {
  getAllEvents,
  getAllGodDetails,
  getEvent,
  getGodDetail,
  postDonation,
  raiseQuery
} from '../controller/userController.js';

const router = express.Router();

router.route('/getAlldetails').get(getAllGodDetails);
router.route('/getdetail/:id').get(getGodDetail);
router.route('/getevents/:id').get(getEvent);
router.route('/getAllevents').get(getAllEvents);
router.route('/query').post(raiseQuery);
router.route('/donate').post(postDonation)

export default router;
