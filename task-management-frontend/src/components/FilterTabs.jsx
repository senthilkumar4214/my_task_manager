import React from 'react';
import { useTasks } from '../context/TaskContext';

const FilterTabs = () => {
    const {
        statusFilter,
        setStatusFilter,
        priorityFilter,
        setPriorityFilter,
        searchTerm,
        setSearchTerm,
    } = useTasks();

    const statusFilters = [
        { value: '', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'in_progress', label: 'In Progress' },
        { value: 'completed', label: 'Completed' },
    ];

    const priorityOptions = [
        { value: '', label: 'All Priorities' },
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
    ];

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handlePriorityChange = (e) => setPriorityFilter(e.target.value);
    const handleStatusChange = (value) => setStatusFilter(value);

    return (
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            {/* Status Tabs */}
            <ul className="nav nav-tabs flex-grow-1">
                {statusFilters.map(({ value, label }) => (
                    <li className="nav-item" key={value || 'all'}>
                        <button
                            type="button"
                            className={`nav-link ${statusFilter === value ? 'active' : ''}`}
                            onClick={() => handleStatusChange(value)}
                        >
                            {label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Priority Dropdown */}
            <select
                className="form-select"
                style={{ width: '180px' }}
                value={priorityFilter}
                onChange={handlePriorityChange}
            >
                {priorityOptions.map(({ value, label }) => (
                    <option key={value || 'all'} value={value}>
                        {label}
                    </option>
                ))}
            </select>

            {/* Search Box */}
            <div className="input-group" style={{ width: '240px' }}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span className="input-group-text">
                    <i className="bi bi-search" />
                </span>
            </div>
        </div>
    );
};

export default FilterTabs;
