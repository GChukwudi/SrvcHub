

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                // Password must be at least 6 characters long
                if (value.length < 8) {
                    return false;
                    message: 'Password must be at least 8 characters long'
                }
                // Password must contain at least one number
                if (!/[0-9]/.test(value)) {
                    return false;
                    message: 'Password must contain at least one number'
                }
                // Password must contain at least one uppercase letter
                if (!/[A-Z]/.test(value)) {
                    return false;
                    message: 'Password must contain at least one uppercase letter'
                }
                // Password must contain at least one lowercase letter
                if (!/[a-z]/.test(value)) {
                    return false;
                    message: 'Password must contain at least one lowercase letter'
                }
                // Password must contain at least one special character
                if (!/[W_]/.test(value)) {
                    return false;
                    message: 'Password must contain at least one special character'
                }
                return true;
            }
        }
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'artisan'],
        default: 'user'
    }
    }, {
        timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;

