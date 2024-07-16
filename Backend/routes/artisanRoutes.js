const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

router.get('/all', artisanController.getAllArtisans);
router.get('/:artisanId', artisanController.getArtisanById);
router.get('/:category', artisanController.getArtisanByCategory);
router.put('/:artisanId', artisanController.updateArtisan);
router.delete('/:artisanId', artisanController.deleteArtisan);
router.post('/loga', artisanController.createArtisan);

module.exports = router;