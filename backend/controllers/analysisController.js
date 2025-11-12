/**
 * @desc    Upload media for tree analysis
 * @route   POST /api/analysis/:treeId
 * @access  Private
 */
const uploadTreeMedia = async (req, res) => {
  // req.file will contain the file info thanks to multer
  if (req.file) {
    console.log('File received:', req.file);

    // In a real app, you would:
    // 1. Upload this file to a cloud storage (like S3 or Cloudinary).
    // 2. Get the URL back from cloud storage.
    // 3. Trigger an AI analysis job.
    // 4. Save the results to the Tree model.

    res.json({
      message: 'File uploaded successfully. Analysis pending.',
      fileName: req.file.originalname,
      filePath: req.file.path, // Multer gives it a temp path
    });
  } else {
    res.status(400).json({ message: 'Please upload a valid image file.' });
  }
};

module.exports = { uploadTreeMedia };