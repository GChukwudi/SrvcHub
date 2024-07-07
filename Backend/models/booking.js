

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    artisanId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    craftId: {
        type: Schema.Types.ObjectId,
        ref: 'Craft',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected', 'completed'], default: 'pending'
    }
}, {
    timestamps: true,
});


const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

