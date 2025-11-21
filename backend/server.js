const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const treeRoutes = require('./routes/treeRoutes');
const analysisRoutes = require('./routes/analysisRoutes');
const publicRoutes = require('./routes/publicRoutes');
// const path = require('path'); // No longer needed for frontend serving

dotenv.config();
connectDB();

const app = express();

// CORS is now ALWAYS needed for the backend because the frontend will be on a DIFFERENT Render URL.
// IMPORTANT: In a real production app, you might want to restrict this to your frontend's exact URL.
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// API Routes
app.use('/api/users', authRoutes);
app.use('/api/trees', treeRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/public', publicRoutes);

// --- Backend Test Route (for development and health checks) ---
// This will be accessible at your backend's URL, e.g., https://carbonsasa-backend.onrender.com/api/test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running! (Production)' });
});

// The backend no longer serves the frontend's build folder.
// The frontend will be a separate Render service.

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});