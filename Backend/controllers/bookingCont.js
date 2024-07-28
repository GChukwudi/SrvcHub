const Booking = require('../models/booking');
const mongoose = require('mongoose');

exports.createBooking = async (req, res) => {
    // const { date, time } = req.body;
    const { date, time, artisanId } = req.body;

    // const userId = mongoose.Types.ObjectId.createFromHexString(req.user.userId);


    // const artisanId = mongoose.Types.ObjectId.createFromHexString(req.body.artisanId);

    try {
        const userId = mongoose.Types.ObjectId(req.user.userId);
        const artisanObjectId = mongoose.Types.ObjectId(artisanId);

        const booking = new Booking({
            artisanId: artisanObjectId,
            userId: userId,
            date,
            time,
        });

        await booking.save();
        res.status(200).json({ message: 'Booking created successfully' });
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

