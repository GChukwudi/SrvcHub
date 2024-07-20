// const Booking = require('../models/booking');

// exports.createBooking = async (req, res) => {
//     const { artisanId, date, time, service } = req.body;
//     const { userId } = req.user.userId;

//     try {
//         const booking = new Booking({
//             artisanId,
//             userId,
//             date,
//             time,
//             service
//         });

//         await booking.save();
//         res.status(200).json({ message: 'Booking created successfully' });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

// exports.cancelBooking = async (req, res) => {
//     const { bookingId } = req.params;

//     try {
//         await Booking.findByIdAndDelete(bookingId);
//         res.status(200).json({ message: 'Booking cancelled successfully' });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

// exports.viewMyAppointment = async (req, res) => {
//     const { userId } = req.params;

//     try {
//         const bookings = await Booking.find({ userId });
//         res.status(200).json(bookings);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

// exports.viewMyBooking = async (req, res) => {
//     const { artisanId } = req.params;

//     try {
//         const bookings = await Booking.find({ artisanId });
//         res.status(200).json(bookings);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }

