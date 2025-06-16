require('dotenv').config(); // Load .env file
console.log('🔍 Loaded MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // To parse JSON

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ Connection failed:', err));

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
