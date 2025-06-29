import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import FilterTabs from '../components/FilterTabs';
import TaskList from '../components/TaskList';
import Offcanvas from '../components/Offcanvas';
import TaskForm from '../components/TaskForm';
import ConfirmModal from '../components/ConfirmModal';
import * as api from '../utils/taskApi.js';

const Home = () => {
    const { load } = useTasks();
    const [showForm, setShowForm] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [delTask, setDelTask] = useState(null);

    const handleDelete = async () => {
        await api.deleteTask(delTask.taskId);
        setDelTask(null);
        load();
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between mb-3">
                <h1>Task Manager</h1>
                <button className="btn btn-success" onClick={() => { setEditTask(null); setShowForm(true); }}>
                    Add Task
                </button>
            </div>
            <FilterTabs />
            <TaskList onEdit={t => { setEditTask(t); setShowForm(true); }} onDelete={t => setDelTask(t)} />
            <Offcanvas show={showForm} onClose={() => setShowForm(false)} title={editTask ? 'Edit Task' : 'New Task'}>
                <TaskForm task={editTask} onClose={() => setShowForm(false)} refresh={load} />
            </Offcanvas>
            <ConfirmModal show={!!delTask} title={`Delete "${delTask?.taskTitle}"?`} onConfirm={handleDelete} onCancel={() => setDelTask(null)} />
        </div>
    );
}

export default Home;
