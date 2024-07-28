const express = require('express');
const router = express.Router();
const { createBooking, cancelBooking, viewMyAppointment, viewMyBooking } = require('../controllers/bookingCont');
const auth = require('../middleware/authMid');

router.post('/create', auth, createBooking);
router.delete('/:id/cancel', auth, cancelBooking);
router.get('/:id/my-appointment', auth, viewMyAppointment);
router.get('/:id/my-booking', auth, viewMyBooking);

module.exports = router;

