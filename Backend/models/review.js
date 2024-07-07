


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // artisanId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    craftId: {
        type: Schema.Types.ObjectId,
        ref: 'Craft',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    Comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});


const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

