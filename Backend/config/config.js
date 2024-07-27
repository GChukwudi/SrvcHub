require('dotenv').config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
}