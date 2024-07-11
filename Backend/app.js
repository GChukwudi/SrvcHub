require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const adminRoutes = require('./routes/adminRoutes');
// const craftRoutes = require('./routes/craftRoutes');
const clientRoutes = require('./routes/clientRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


app.use('/admin', adminRoutes);
// app.use('/craft', craftRoutes);
app.use('/client', clientRoutes);
app.use('/booking', bookingRoutes);
app.use('/auth', authRoutes);
app.use('/artisan', artisanRoutes);
app.use('/review', reviewRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

