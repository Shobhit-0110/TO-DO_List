import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <h1>To-Do List Manager</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Task</Link>
    </nav>
  </header>
);

export default Header;