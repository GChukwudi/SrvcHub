const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { MONGODB_URI, PORT } = require('./config/config');


const authRoutes = require('./routes/authRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


// dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500' ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    preflightContinue: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URI, {
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


app.use('/auth', authRoutes);
app.use('/artisan', artisanRoutes);
app.use('/booking', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});