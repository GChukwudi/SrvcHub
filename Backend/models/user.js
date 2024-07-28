const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const locationSchema = new mongoose.Schema({
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
        required: false
    },
    verificationCodeExpires: {
        type: Date,
        required: false
    },
    isArtisan: {
        type: Boolean,
        default: false
    },
    location: locationSchema,
    address: {
        type: String,
        required: false
    },
    imageProfile: {
        type: Buffer,
        required: false
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);