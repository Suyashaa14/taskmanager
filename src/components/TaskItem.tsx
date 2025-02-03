import React from 'react';
import { Task } from '../store/taskSlice';

interface TaskItemProps {
  task: Task;
  toggleStatus: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleStatus, removeTask }) => {
  return (
    <div className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleStatus(task.id)} 
        className="checkbox"
      />
      <span className={`task-title ${task.completed ? 'completed' : ''}`}>
        {task.title}
      </span>
      <button onClick={() => removeTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
