const Tree = require('../models/treeModel');

/**
 * @desc    Create a new tree
 * @route   POST /api/trees
 * @access  Private
 */
const createTree = async (req, res) => {
  try {
    const { species, location, plantingDate } = req.body;

    // Basic validation
    if (!species || !location || !location.coordinates || !location.type) {
      return res.status(400).json({ message: 'Please provide species and full location data' });
    }

    // Generate Friendly ID
    // Logic: Take first 3 letters of species + random 4 digits
    // Example: Species "Grevillea" -> "GRE-8392"
    const prefix = species.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const friendlyId = `${prefix}-${randomNum}`;

    const tree = new Tree({
      user: req.user._id, // Attach the logged-in user's ID
      friendlyId,         // Attach the generated ID
      species,
      location,
      plantingDate,
    });

    const createdTree = await tree.save();
    res.status(201).json(createdTree);
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

/**
 * @desc    Get logged-in user's trees
 * @route   GET /api/trees
 * @access  Private
 */
const getMyTrees = async (req, res) => {
  try {
    // Find all trees where the 'user' field matches the logged-in user's ID
    const trees = await Tree.find({ user: req.user._id });
    res.json(trees);
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

/**
 * @desc    Get tree by ID
 * @route   GET /api/trees/:id
 * @access  Private
 */
const getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);

    if (tree) {
      // Check if the tree belongs to the user
      if (tree.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized to view this tree' });
      }
      res.json(tree);
    } else {
      res.status(404).json({ message: 'Tree not found' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

module.exports = { createTree, getMyTrees, getTreeById };