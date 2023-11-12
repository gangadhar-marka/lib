// src/pages/StudentLoginPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Update the import path
import StudentLoginForm from '../components/StudentLoginForm'; // Import the login form component

const StudentLoginPage = () => {
  return (
    <div>
      <Navbar /> 
      <h1>Student Login</h1>
      <StudentLoginForm />
    </div>
  );
};

export default StudentLoginPage;
