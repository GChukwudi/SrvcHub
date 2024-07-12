

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const craftSchema = new Schema({
    artisanId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Jewelry', 'Clothing', 'Home', 'Art', 'Other']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    image: {
        type: string,
        required: true
    },
    imageType: {
        type: String,
        emunm: ['image/jpeg', 'image/png'],
        required: true
    },
    profileImage: {
        type: Buffer,
        required: false
    },
    profileImageType: {
        type: String,
        required: false
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    rating: {
        type: Number,
        required: false
    }
}, {
    timestamps: true,
});

const Craft = mongoose.model('Craft', craftSchema);
module.exports = Craft;

