const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

const generateToken = (userId, role) => {
    return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '24h' });
}

module.exports = generateToken;
    