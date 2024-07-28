const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Jeweler', 'Tailor', 'Sculptor', 'LeatherWorker', 'Weaver', 'Potter', 'Carpenter', 'Plumber', 'Curlinary', 'Hairdresser', 'Painter', 'Electrician', 'Mechanic', 'Woodworker', 'Photographer', 'Baker', 'Blacksmith', 'Others']
    },
    bio: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artisan', artisanSchema);