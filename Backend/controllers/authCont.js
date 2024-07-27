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
        pass: EMAIL_PASSWORD
    }
});

exports.signup = async (req, res) => {
    let { name, email, password, role, address, location } = req.body;

    try {

        const userExists = await User.findOne({ email });
        console.log('password:', password);       

        const verificationCode = crypto.randomInt(100000, 999999).toString();

        const newUser = new User({ name, email, password, role, verificationCode, verificationCodeExpires: Date.now() + 3600000, isVerified: false, address, location});

        await newUser.save();

        const verificationEmail = `Your verification code is ${verificationCode}. This code will expire in 1 hour.`;

        await transporter.sendMail({
            to: email,
            subject: 'Email Verification',
            text: verificationEmail
        });

        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        console.log(err);
        // await User.remove({ email });
        res.status(500).json({ message: 'Internal server error!' });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials!' });

        console.log('password:', password, 'user.password:', user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('isMatch:', isMatch);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect email or password!' });

        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
        console.log('token:', token);
        res.status(200).json({ token, message: 'User signed in successfully!' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error!' });
    }
}

exports.signout = async (req, res) => {
    res.status(200).json({ message: 'User signed out successfully!' });
}

exports.verify = async (req, res) => {
    // const { email, verificationCode } = req.body;
    const { verificationCode } = req.body;

    try {
        const user = await User.findOne({ verificationCode });
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

exports.getUserProfile = async (req, res) => {
    const { userId } = req;

    try {
        const user = await User.findById(userId).select('-password');
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error!' });
    }
}

exports.updateUserProfile = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(400).json({ message: err.message });

        const { userId } = req;
        const { name, email, address, location } = req.body;
        const imageProfile = req.file.filename;

        try {
            const user = await User.findById(userId);
            user.name = name;
            user.email = email;
            user.address = address;
            user.location = location;
            user.imageProfile = imageProfile;
            await user.save();

            res.status(200).json({ message: 'User profile updated successfully!' });
        } catch (err) {
            res.status(500).json({ message: 'Internal server error!' });
        }
    });
}



