const mongoose = require('mongoose');
const express = require('express');
// const dotenv = require('dotenv');
const { MONGO_URI, PORT } = require('./config/config');


const authRoutes = require('./routes/authRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


// dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to database');
});

app.use('/auth', authRoutes);
app.use('/artisan', artisanRoutes);
app.use('/booking', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});s