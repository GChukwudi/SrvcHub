const Craft = require('../models/craft');
// const Review = require('../models/review');
const Booking = require('../models/booking');


exports.browseCrafts = async (req, res) => {
    Craft.find()
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.bookService = async (req, res) => {
    const booking = new Booking({
        artisanId: req.body.artisanId,
        craftId: req.body.craftId,
        date: req.body.date
    });
    booking.save()
        .then(() => res.status(201).json({ message: 'Booking created successfully' }))
        .catch(err => res.status(500).json({ error: err }));
};

exports.getBookings = async (req, res) => {
    Booking.find()
        .then(bookings => res.status(200).json(bookings))
        .catch(err => res.status(500).json({ error: err }));
}

exports.cancelBooking = async (req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(booking => res.status(200).json({ message: 'Booking deleted successfully', booking }))
        .catch(err => res.status(500).json({ error: err }));
}

