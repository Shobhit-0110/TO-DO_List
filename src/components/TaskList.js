import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import { Link } from 'react-router-dom';
import '../styles/TaskList.css';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <h2>{task.title}</h2>
          <p>{task.description || 'No Description'}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          <Link to={`/edit/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;