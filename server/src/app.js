// Express Configuration

// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();

const healthRoutes = require('./routes/healthRoutes.js')


// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/health', healthRoutes);


// Routes
app.get('/api/health', (req, res) => {
    res.json({
        message: 'GigLedger API is running'
    });
})

module.exports = app;