const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Craft = require('../models/craft');
const Booking = require('../models/booking');
const Review = require('../models/review');
const { validationResult } = require('express-validator');


exports.generateReport = async (req, res) => {
    Promise.all([
        User.find(),
        Craft.find(),
        Booking.find()
    ])

    .then(([users, crafts, bookings]) => res.status(200).json({ users, crafts, bookings }))
    .catch(err => res.status(500).json({ error: err }));
}

exports.manageUser = async (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ error: err }));
}

exports.manageCraft = async (req, res) => {
    Craft.find()
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}

exports.manageBooking = async (req, res) => {
    Booking.find()
        .then(bookings => res.status(200).json(bookings))
        .catch(err => res.status(500).json({ error: err }));
}

