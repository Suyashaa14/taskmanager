import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskFilter from './components/TaskFilter';
import { RootState } from './store/store';
import './App.css'


const App = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1 className="title">Task Manager By Suyashaa</h1>
      <AddTaskForm />
      <TaskFilter setFilter={setFilter} currentFilter={filter} />
      <TaskList tasks={filteredTasks} /> 
    </div>
  );
};

export default App;
