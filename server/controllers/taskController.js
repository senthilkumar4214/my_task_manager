// region Imports
import { Op } from 'sequelize';
import Task from '../models/Task.js';
// endregion Imports

// region Create Task
const createTask = async (req, res) => {
    try {
        const {
            taskTitle,
            taskDescription,
            taskStatus = 'pending',
            taskPriority = 'medium',
            taskDueDate,
        } = req.body;

        // Validation
        if (!taskTitle || !taskDueDate) {
            return res.status(400).json({ error: 'Task Title and Due Date are required' });
        }

        const newTask = await Task.create({
            taskTitle,
            taskDescription,
            taskStatus,
            taskPriority,
            taskDueDate,
        });

        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// endregion Create Task

// region Get Tasks
// Get all tasks (with optional filtering by status or priority)
const getTasks = async (req, res) => {
    try {
        const { status, priority, search } = req.query;

        const where = {
            ...(status ? { taskStatus: status } : {}),
            ...(priority ? { taskPriority: priority } : {}),
            ...(search ? {
                taskTitle: {
                    [Op.like]: `%${search}%`, // search by title
                },
            } : {}),
            isDeleted: false, // soft delete filter
        };

        const tasks = await Task.findAll({ where });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// endregion Get Tasks

// region single task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                taskId: req.params.id,
                isDeleted: false,
            },
        });

        if (!task) return res.status(404).json({ error: 'Task not found' });

        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// endregion Task Actions

// region Update task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                taskId: req.params.id,
                isDeleted: false,
            },
        });

        if (!task) return res.status(404).json({ error: 'Task not found' });

        await task.update(req.body);
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// endregion Update Task

// region Delete Task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                taskId: req.params.id,
                isDeleted: false,
            },
        });

        if (!task) return res.status(404).json({ error: 'Task not found' });

        await task.update({ isDeleted: true });
        res.json({ message: 'Task deleted (soft delete)' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// endregion Delete Task

// region Export
export {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
}
// endregion Export