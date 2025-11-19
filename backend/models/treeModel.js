const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema(
  {
    // Link this tree to the user who 'owns' or planted it
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // Auto-generated human-readable ID (e.g., GRE-1024)
    friendlyId: {
      type: String,
      unique: true,
    },
    species: {
      type: String,
      required: true,
    },
    location: {
      // Using GeoJSON Point format
      type: {
        type: String,
        enum: ['Point'],
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
        report: { type: String },
        analyzedAt: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Optional: Create a 2dsphere index for geospatial queries
treeSchema.index({ location: '2dsphere' });

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;