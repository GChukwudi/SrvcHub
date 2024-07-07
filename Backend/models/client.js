

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const clientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    notes: { type: String, required: false },
    date: { type: Date, required: true }
}, {
    timestamps: true,
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

