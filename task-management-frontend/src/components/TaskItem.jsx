import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const TaskItem = ({ task, onEdit, onDelete }) => {
    const formatStatus = (status) => {
        switch (status) {
            case 'pending':
                return 'Pending';
            case 'in_progress':
                return 'In Progress';
            case 'completed':
                return 'Completed';
            default:
                return status;
        }
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="card border-0 shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-start">
                <div className="pe-3">
                    <h5 className="card-title mb-1">{task.taskTitle}</h5>
                    <p className="text-muted small mb-2">{task.taskDescription}</p>
                    <div className="text-secondary small">
                        <span className="me-3"><strong>Status:</strong> {formatStatus(task.taskStatus)}</span>
                        <span className="me-3"><strong>Priority:</strong> {capitalize(task.taskPriority)}</span>
                        <span><strong>Due:</strong> {task.taskDueDate}</span>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-end gap-2">
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={onEdit}
                        title="Edit Task"
                    >
                        <FaEdit />
                    </button>
                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={onDelete}
                        title="Delete Task"
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
