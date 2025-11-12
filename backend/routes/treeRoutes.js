const express = require('express');
const router = express.Router();
const {
  createTree,
  getMyTrees,
  getTreeById,
} = require('../controllers/treeController');
const { protect } = require('../middleware/authMiddleware');

// All routes in this file are protected by the 'protect' middleware

// Route for GET /api/trees (get all user's trees)
// Route for POST /api/trees (create a new tree)
router.route('/').get(protect, getMyTrees).post(protect, createTree);

// Route for GET /api/trees/:id (get a single tree by its ID)
router.route('/:id').get(protect, getTreeById);

module.exports = router;