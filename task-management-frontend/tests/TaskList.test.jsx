import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import { TaskContext } from '../context/TaskContext';

test('shows validation errors', () => {
    render(
        <TaskContext.Provider value={{ tasks: [], setTasks: jest.fn() }}>
            <TaskForm />
        </TaskContext.Provider>
    );
    fireEvent.click(screen.getByText('Create Task'));
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Due date is required')).toBeInTheDocument();
});