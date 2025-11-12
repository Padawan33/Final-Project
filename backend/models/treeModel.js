const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema(
  {
    // Link this tree to the user who 'owns' or planted it
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // This creates a relationship with the User model
    },
    species: {
      type: String,
      required: true,
    },
    location: {
      // Using GeoJSON Point format
      type: {
        type: String,
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true,
      },
      coordinates: {
        type: [Number], // Array of numbers [longitude, latitude]
        required: true,
      },
    },
    plantingDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // This will store URLs to media (photos/videos)
    media: [
      {
        url: { type: String, required: true },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
    // This will store periodic health analysis results
    healthAnalyses: [
      {
        status: {
          type: String,
          enum: ['Healthy', 'Stressed', 'Diseased', 'Unknown'],
          default: 'Unknown',
        },
        report: { type: String }, // A brief report from the AI
        analyzedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

// Optional: Create a 2dsphere index for geospatial queries
treeSchema.index({ location: '2dsphere' });

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;