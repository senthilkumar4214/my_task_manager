import TaskItem from './TaskItem';
import { useTasks } from '../context/TaskContext';

const TaskList = ({ onEdit, onDelete }) => {
    const { tasks, loading } = useTasks();
    if (loading) return <div className="spinner-border" />;
    if (!tasks.length) return <p>No tasks found.</p>;
    return tasks.map(t => (
        <TaskItem key={t.taskId} task={t} onEdit={() => onEdit(t)} onDelete={() => onDelete(t)} />
    ));
}

export default TaskList;
