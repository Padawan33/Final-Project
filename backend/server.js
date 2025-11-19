const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the DB connection
const authRoutes = require('./routes/authRoutes'); // Import the auth routes
const treeRoutes = require('./routes/treeRoutes'); // Import the tree routes
const analysisRoutes = require('./routes/analysisRoutes');
const publicRoutes = require('./routes/publicRoutes');


// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running! 🚀' });
});

// Mount router
app.use('/api/users', authRoutes);
app.use('/api/trees', treeRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/public', publicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});