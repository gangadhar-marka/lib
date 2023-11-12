// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedContent from './components/SharedContent';
import StudentRegistrationPage from './pages/StudentRegistrationPage';
import StudentLoginForm from './components/StudentLoginForm';
import HiPage from './pages/HiPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedContent />} />
        <Route path="/hi" element={<HiPage />} />
        <Route path="/student-registration" element={<StudentRegistrationPage />} />
        <Route path="/student-login" element={<StudentLoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
