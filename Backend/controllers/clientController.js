const Craft = require('../models/craft');
const Review = require('../models/review');
const Booking = require('../models/booking');


exports.browseCrafts = async (req, res) => {
    Craft.find()
        .then(crafts => res.status(200).json(crafts))
        .catch(err => res.status(500).json({ error: err }));
}