import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getTaskById, deleteTask } from '../utils/api';

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getTaskById(id);
                setTask(data);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            try {
                await deleteTask(id);
                navigate('/');
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    if (!task) return <div className="container py-5 text-center">Loading...</div>;

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-body">
                    <h4 className="card-title">{task.taskTitle}</h4>
                    <p className="card-text">{task.taskDescription || <em>No description</em>}</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">
                            <strong>Status:</strong> {task.taskStatus.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </li>
                        <li className="list-group-item">
                            <strong>Priority:</strong> {task.taskPriority.charAt(0).toUpperCase() + task.taskPriority.slice(1)}
                        </li>
                        <li className="list-group-item">
                            <strong>Due Date:</strong> {task.taskDueDate}
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <Link to={`/edit/${id}`} className="btn btn-primary w-100">Edit</Link>
                        <button className="btn btn-danger w-100" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
