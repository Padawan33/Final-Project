const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Route for registering a new user
// Corresponds to POST /api/users/register
router.post('/register', registerUser);

// Route for logging in a user
// Corresponds to POST /api/users/login
router.post('/login', loginUser);

module.exports = router;