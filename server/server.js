// Start App

//Dependencies
const dotenv = require('dotenv');
dotenv.config();
const app = require('./src/app.js');
const PORT = process.env.PORT || 5000;


const startServer = async () => {
    try {
        // later: await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        });
    } catch (error) {
        console.error('Connection Error: ', error);
        process.exit(1);
    }
}

startServer();