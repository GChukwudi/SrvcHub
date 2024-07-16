const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);
        res.status(201).json({ token });
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || bcrypt.compare(password, user.password)) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
