// Express Configuration

// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/api/health', (req, res) => {
    res.json({
        message: 'GigLedger API is running'
    });
})

module.exports = app;