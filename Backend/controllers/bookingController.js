const Booking = require('../models/booking');


exports.scheduleAppointment = async (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, { status: 'confirmed' }, { new: true })
        .then(booking => res.status(200).json({ message: 'Booking confirmed successfully', booking }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.cancelAppointment = async (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, { status: 'cancelled' }, { new: true })
        .then(booking => res.status(200).json({ message: 'Booking cancelled successfully', booking }))
        .catch(err => res.status(500).json({ error: err }));
}

