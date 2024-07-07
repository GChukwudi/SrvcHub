


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artisanSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    craft: { type: String, required: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
});

const Artisan = mongoose.model('Artisan', artisanSchema);

module.exports = Artisan;

