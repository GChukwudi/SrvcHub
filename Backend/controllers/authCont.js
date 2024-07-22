const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, EMAIL, EMAIL_PASSWORD } = require('../config/config');
const crypto = require('crypto');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationCode = crypto.randomInt(100000, 999999).toString();

        const newUser = new User({ name, email, password: hashedPassword, role, verificationCode, verificationCodeExpires: Date.now() + 3600000, isVerified: false });

        await newUser.save();

        const verificationEmail = `Your verification code is ${verificationCode}. This code will expire in 1 hour.`;

        await transporter.sendMail({
            to: email,
            subject: 'Email Verification',
            text: verificationEmail
        });

        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials!' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials!' });

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' });
    }
}

exports.signout = async (req, res) => {
    res.status(200).json({ message: 'User signed out successfully!' });
}

exports.verify = async (req, res) => {
    const { email, verificationCode } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found!' });

        if (user.verificationCode !== verificationCode) return res.status(400).json({ message: 'Invalid verification code!' });

        if (user.verificationCodeExpires < Date.now()) return res.status(400).json({ message: 'Verification code has expired!' });

        user.isVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Email Verified successfully! You can log in now.' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!' });
    }
}

