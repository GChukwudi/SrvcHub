const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');

router.post('/admin', adminController.createAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/reports', checkAuth, checkAdmin, adminController.generateReport);
router.get('/users', checkAuth, checkAdmin, adminController.manageUser);
router.get('/viewcrafts', checkAuth, checkAdmin, adminController.manageCraft);
router.get('/viewbookings', checkAuth, checkAdmin, adminController.manageBooking);

module.exports = router;

