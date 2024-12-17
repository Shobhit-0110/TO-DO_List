import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const EditTaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => state.tasks.tasks.find(task => task.id === parseInt(id)));

  return task ? <TaskForm task={task} isEditMode /> : <p>Task not found!</p>;
};

export default EditTaskPage;