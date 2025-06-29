import { useState, useEffect } from 'react';
import * as api from '../utils/taskApi.js';

const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
];

const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
];

const TaskForm = ({ task, onClose, refresh }) => {
    const [form, setForm] = useState({
        taskTitle: '',
        taskDescription: '',
        taskStatus: 'pending',
        taskPriority: 'medium',
        taskDueDate: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (task) setForm(task);
    }, [task]);

    const handleChange = ({ target: { name, value } }) => {
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleBlur = ({ target: { name, value } }) => {
        if (!value.trim()) {
            setErrors(prev => ({
                ...prev,
                [name]: `${name.replace('task', '')} is required`
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!form.taskTitle.trim()) newErrors.taskTitle = 'Title is required';
        if (!form.taskDueDate) newErrors.taskDueDate = 'Due date is required';
        return newErrors;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            task
                ? await api.updateTask(task.taskId, form)
                : await api.createTask(form);
            refresh();
            onClose();
        } catch (err) {
            console.error('Submission error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {/* Title */}
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    name="taskTitle"
                    className={`form-control ${errors.taskTitle ? 'is-invalid' : ''}`}
                    value={form.taskTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.taskTitle && (
                    <div className="invalid-feedback">{errors.taskTitle}</div>
                )}
            </div>

            {/* Description */}
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    name="taskDescription"
                    className="form-control"
                    rows="3"
                    value={form.taskDescription}
                    onChange={handleChange}
                    placeholder="Optional"
                />
            </div>

            {/* Status */}
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                    name="taskStatus"
                    className="form-select"
                    value={form.taskStatus}
                    onChange={handleChange}
                >
                    {statusOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            {/* Priority */}
            <div className="mb-3">
                <label className="form-label">Priority</label>
                <select
                    name="taskPriority"
                    className="form-select"
                    value={form.taskPriority}
                    onChange={handleChange}
                >
                    {priorityOptions.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>

            {/* Due Date */}
            <div className="mb-3">
                <label className="form-label">Due Date</label>
                <input
                    type="date"
                    name="taskDueDate"
                    className={`form-control ${errors.taskDueDate ? 'is-invalid' : ''}`}
                    value={form.taskDueDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.taskDueDate && (
                    <div className="invalid-feedback">{errors.taskDueDate}</div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="d-flex justify-content-end gap-2">
                <button type="submit" className="btn btn-primary">
                    {task ? 'Update Task' : 'Create Task'}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
