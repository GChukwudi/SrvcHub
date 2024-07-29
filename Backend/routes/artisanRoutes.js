const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanCont');

router.get('/search', artisanController.getArtisans);
// router.get('/search/:name', artisanController.searchArtisanByName);
router.get('/all', artisanController.getAllArtisans);
router.get('/:artisanId', artisanController.getArtisanById);
router.put('/:artisanId', artisanController.updateArtisan);
// router.delete('/:artisanId', artisanController.deleteArtisan);
router.post('/log', artisanController.createArtisan);

module.exports = router;