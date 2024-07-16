const Booking = require('../models/bookingModel');

exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { date, time, userId } = req.body;

    try {
        const newBooking = new Booking({
            artisanId: id,
            userId,
            date,
            time,
            status: 'Pending'
        });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.cancelBooking = async (req, res) => {
    const { bookingId } = req.params;

    try {
        await Booking.findByIdAndDelete(bookingId);
        res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.viewMyAppointment = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.find({ userId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.viewMyBooking = async (req, res) => {
    const { artisanId } = req.params;

    try {
        const bookings = await Booking.find({ artisanId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

