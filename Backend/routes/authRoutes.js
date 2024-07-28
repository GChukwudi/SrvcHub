const express = require('express');
const router = express.Router();
const authController = require('../controllers/authCont');
const auth = require('../middleware/authMid');


router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/signout', authController.signout);
router.post('/verify', authController.verify);
router.get('/profile', auth, authController.getUserProfile);
router.put('/editprofile', auth, authController.updateUserProfile);

module.exports = router;