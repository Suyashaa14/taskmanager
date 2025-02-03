import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, removeTask } from '../store/taskSlice';
import TaskItem from './TaskItem';
import { Task } from '../store/taskSlice';
import '../css/TaskList.css'; 

interface TaskListProps {
  tasks: Task[]; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleToggleStatus = (id: number) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            toggleStatus={handleToggleStatus}  
            removeTask={handleRemoveTask}  
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
