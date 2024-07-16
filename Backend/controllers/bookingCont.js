const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
    try {
        const { userId, arisanId, date, address, status } = req.body;
        const newBooking = new Booking({ userId, arisanId, date, address, status });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            throw new Error('Booking not found');
        }
        booking.status = 'Cancelled';
        await booking.save();
        res.status(200).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.viewMyAppointment = async (req, res) => {
    try {
        const { userId } = req.params;
        const bookings = await Booking.find({ userId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

