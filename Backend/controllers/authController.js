const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


// Register a new user
exports.signup = async (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err });

        const role = req.body.role;

        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            role
        });
        user.save()
            .then(result => {
                res.status(201).json({ message: 'User created successfully' });
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    }
    );
}

// Login a user
exports.login = async (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) return res.status(401).json({ message: 'Authentication failed' });
            
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err || !result) return res.status(401).json({ message: 'Authentication failed' });

                const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ token, expiresIn: 3600, userId: user._id, role: user.role });
        });

})
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

