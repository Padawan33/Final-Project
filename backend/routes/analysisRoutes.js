const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { uploadTreeMedia } = require('../controllers/analysisController');
const { protect } = require('../middleware/authMiddleware');

// --- Multer Configuration ---

// Set up storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save files to an 'uploads/' directory
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Create a unique filename: fieldname-timestamp.ext
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Check for valid file types
function checkFileType(file, cb) {
  // Allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check the extension
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check the mime type
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Initialize multer upload middleware
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
// ----------------------------

// Define the route
// POST /api/analysis/:treeId
router
  .route('/:treeId')
  .post(protect, upload.single('treeImage'), uploadTreeMedia);
// 'treeImage' is the name of the form field we'll use

module.exports = router;