import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UserContext from './contexts/UserContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import UserList from './pages/UserList';
import TodoListPage from './pages/TodoListPage';

function App() {
  const currentHour = new Date().getHours();
  let greetingMessage = "";

  if (currentHour < 12) {
    greetingMessage = "Good Morning!";
  } else if (currentHour < 18) {
    greetingMessage = "Hello!";
  } else {
    greetingMessage = "Good Evening!"
  }

  const currentUser = { name: "Learner", role: "Student" };

  return (
    <UserContext.Provider value={currentUser}>
      <Router>
        <div className="App">
          <h1>{greetingMessage} Wellcome to React!</h1>
          <p>Date: {new Date().toLocaleTimeString()}</p>
          <p>This is simple application written in React and TypeScript.</p>

          <hr />

          <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none', color: '#28a745', fontWeight: 'bold' }}>About</Link>
            <Link to="/users" style={{ marginRight: '15px', textDecoration: 'none', color: '#663399', fontWeight: 'bold' }}>Users</Link>
            <Link to="/todos" style={{ marginRight: '15px', textDecoration: 'none', color: '#ff5722', fontWeight: 'bold' }}>Todos</Link>
            <Link to="/non-existent-page" style={{ textDecoration: 'none', color: '#dc3545', fontWeight: 'bold' }}>Invalid Page</Link>
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/todos" element={<TodoListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <hr />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
