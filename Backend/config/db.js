

const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

