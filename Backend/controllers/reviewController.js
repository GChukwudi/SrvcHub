const Review = require('../models/review');


exports.leaveReview = async (req, res) => {
    const review = new Review({
        clientId: req.userData.userId,
        craftId: req.body.craftId,
        rating: req.body.rating,
        comment: req.body.comment
    });

    review.save()
        .then(() => res.status(201).json({ message: 'Review created successfully' }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.respondToReview = async (req, res) => {
    Review.findByIdAndUpdate(req.params.id, { response: req.body.response }, { new: true })
        .then(review => res.status(200).json({ message: 'Review updated successfully', review }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.deleteReview = async (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(review => res.status(200).json({ message: 'Review deleted successfully', review }))
        .catch(err => res.status(500).json({ error: err }));
}

exports.getReviews = async (req, res) => {
    Review.find()
        .then(reviews => res.status(200).json(reviews))
        .catch(err => res.status(500).json({ error: err }));
}

