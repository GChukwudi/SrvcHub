const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const checkAuth = require('../middleware/checkAuth');


router.post('/review', checkAuth, reviewController.leaveReview);
router.put('/review/:id/respond', checkAuth, reviewController.respondToReview);
router.delete('/review/:id', checkAuth, reviewController.deleteReview);
router.get('/reviews', checkAuth, reviewController.getReviews);


module.exports = router;
