const Tree = require('../models/treeModel');
const User = require('../models/userModel');

// @desc    Get global platform statistics
// @route   GET /api/public/stats
// @access  Public
const getPublicStats = async (req, res) => {
  try {
    const totalTrees = await Tree.countDocuments();
    const totalUsers = await User.countDocuments();

    // Calculate Aggregate Carbon & Donations (Simulation)
    const trees = await Tree.find().select('plantingDate');
    let totalCarbon = 0;
    let totalDonated = 0;
    const RATE_PER_MONTH = 100; // KES

    trees.forEach(tree => {
      const start = new Date(tree.plantingDate);
      const now = new Date();
      const diffDays = Math.ceil(Math.abs(now - start) / (1000 * 60 * 60 * 24));
      totalCarbon += (diffDays / 365) * 22;
      const diffMonths = diffDays / 30;
      totalDonated += (diffMonths * RATE_PER_MONTH) * 0.01;
    });

    res.json({
      totalTrees,
      totalUsers,
      totalCarbon: totalCarbon.toFixed(2),
      totalDonated: totalDonated.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getPublicStats };