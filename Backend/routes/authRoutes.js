const express = require('express');
const router = express.Router();
const authController = require('../controllers/authCont');


router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/signout', authController.signout);
router.post('/verify', authController.verify);




module.exports = router;