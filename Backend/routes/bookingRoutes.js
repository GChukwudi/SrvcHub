const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const checkAuth = require('../middleware/checkAuth');

router.put('/booking/:id/confirm', checkAuth, bookingController.scheduleAppointment);
router.put('/booking/:id/cancel', checkAuth, bookingController.cancelAppointment);

module.exports = router;

