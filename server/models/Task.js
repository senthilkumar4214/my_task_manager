// region Imports
// Import necessary modules
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/dbConnection.js';
// endregion Imports

// Define the Task model
// region Task Model
const Task = sequelize.define('Task', {
    taskId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    taskTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    taskDescription: {
        type: DataTypes.TEXT,
    },
    taskStatus: {
        type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
        defaultValue: 'pending',
    },
    taskPriority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        defaultValue: 'medium',
    },
    taskDueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: true, // enables createdAt and updatedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'tasks',
});
// endregion Task Model

// region Export
export default Task;
// endregion Export
