import dotenv from 'dotenv';
import { connectToDatabase, sequelize } from './config/dbConnection.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectToDatabase();
    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();
