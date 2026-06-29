// Start App

//Dependencies
const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app.js');
const pool = require('./src/config/db.js')

const PORT = process.env.PORT || 1111;

const startServer = async () => {
    try {
        // later: await connectDB();
        await pool.query('SELECT 1');
        console.log('Database connected');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        });
    } catch (error) {
        console.error('Connection Error: ', error);
        process.exit(1);
    }
}

startServer();