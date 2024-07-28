const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const auth = async (req, res, next) => {
    console.log(req.header('Authorization'));
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
}

module.exports = auth;

