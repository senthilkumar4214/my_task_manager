import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import { TaskContext } from '../context/TaskContext';

const mockTasks = [
    { taskId: 1, taskTitle: 'Test Task', taskDescription: 'Test', taskStatus: 'pending', taskPriority: 'medium', taskDueDate: '2025-07-01' },
];

test('renders task list', () => {
    render(
        <TaskContext.Provider value={{ tasks: mockTasks, setTasks: jest.fn(), filter: 'all', setFilter: jest.fn() }}>
            <TaskList />
        </TaskContext.Provider>
    );
    expect(screen.getByText('Test Task')).toBeInTheDocument();
});