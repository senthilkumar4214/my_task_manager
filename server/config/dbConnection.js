// region Imports
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
// endregion Imports

dotenv.config();

// region Database Connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
);


const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Failed to connect to database:', error.message);
        process.exit(1);
    }
};
// endregion Database Connection

// region Export
export { connectToDatabase, sequelize };
// endregion Export
