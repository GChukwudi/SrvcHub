const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const checkAuth = require('../middleware/checkAuth');


router.get('/crafts', checkAuth, clientController.browseCrafts);
router.post('/bookingService', checkAuth, clientController.bookService);
router.get('/bookings', checkAuth, clientController.getBookings);
router.delete('/bookings/:id', checkAuth, clientController.cancelBooking);

module.exports = router;

