const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingCont');
const { auth } = require('../middleware/authMid');

router.post('/:id/book', auth, bookingController.createBooking);
router.get('/:id/mybookings', auth, bookingController.viewMyBooking);
router.get('/:id/appointments'), auth, bookingController.viewMyAppointment;
router.delete('/cancel/:bookingId', auth, bookingController.cancelBooking);


module.exports = router;