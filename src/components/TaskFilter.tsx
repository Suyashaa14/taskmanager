import React from 'react';
import '../css/TaskFilter.css';

interface TaskFilterProps {
  setFilter: (filter: string) => void;
  currentFilter: string;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ setFilter, currentFilter }) => {
  return (
    <div className="task-filter">
      <button
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`filter-btn ${currentFilter === 'pending' ? 'active' : ''}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
