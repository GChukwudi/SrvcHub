const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
    try {
        const { userId, arisanId, date, address, status } = req.body;
        const newBooking = new Booking({ userId, arisanId, date, address, status });
    }