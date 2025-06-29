import React, { createContext, useContext, useEffect, useState } from 'react';
import * as api from '../utils/taskApi.js';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const load = async () => {
        setLoading(true);
        try {
            const data = await api.getTasks(statusFilter, priorityFilter, searchTerm);
            setTasks(data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, [statusFilter, priorityFilter, searchTerm]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loading,
                statusFilter,
                setStatusFilter,
                priorityFilter,
                setPriorityFilter,
                searchTerm,
                setSearchTerm,
                load,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
