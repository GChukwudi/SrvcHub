const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');
const checkAuth = require('../middleware/checkAuth');
const multer = require('../middleware/multer-config');

// router.get('/profile', checkAuth, artisanController.getProfile);
router.put('/crafts', checkAuth, multer, artisanController.createCraft);
router.get('/crafts', checkAuth, artisanController.listCrafts);
router.put('/crafts/:id', checkAuth, multer, artisanController.updateCraft);
router.delete('/crafts/:id', checkAuth, artisanController.deleteCraft);
router.get('/crafts/artisan/:artisanId', checkAuth, artisanController.getCraftsByArtisan);
router.get('/crafts/category/:category', checkAuth, artisanController.getCraftsByCategory);
router.get('/crafts/rating/:rating', checkAuth, artisanController.getCraftsByRating);
router.get('/crafts/pricing/:price', checkAuth, artisanController.getCraftsByPrice);
router.get('/crafts/search/:name', checkAuth, artisanController.getCraftsBySearch);

module.exports = router;
