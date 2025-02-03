import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import '../css/AddTaskForm.css'; 

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-task-form">
      <h2>Add a New Task</h2>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="input-field"
        />
      </div>
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
