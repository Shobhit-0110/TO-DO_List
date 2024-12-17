import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import Header from './components/Header';
import './styles/App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddTaskPage />} />
      <Route path="/edit/:id" element={<EditTaskPage />} />
    </Routes>
  </Router>
);

export default App;
