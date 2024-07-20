const express = require('express');
const router = express.Router();
const bookingCont = require('../controllers/bookingCont');
const { auth } = require('../middleware/authMid');

router.post('/:id/book', auth, bookingCont.createBooking);
router.get('/:id/mybookings', auth, bookingCont.viewMyBooking);
router.get('/:id/appointments', auth, bookingCont.viewMyAppointment);
router.delete('/cancel/:bookingId', auth, bookingCont.cancelBooking);


module.exports = router;