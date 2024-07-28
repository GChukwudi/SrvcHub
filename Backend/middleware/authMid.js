const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const auth = async (req, res, next) => {
    // console.log(req.header('Authorization'));
    const token = req.cookies.token;
    if (!token) {
        console.log(err);
        return res.status(401).json({ error: 'Access denied. No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Invalid token' });
    }
}

module.exports = auth;

