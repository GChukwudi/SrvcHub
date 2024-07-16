const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const { MONGO_URI, PORT } = require('./config/config');


const authRoutes = require('./routes/authRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const bookingRoutes = require('./routes/bookingRoutes');


dotenv.config();
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/artisan', artisanRoutes);
app.use('/booking', bookingRoutes);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });