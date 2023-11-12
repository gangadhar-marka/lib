// src/components/StudentRegistrationPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import StudentRegistrationForm from '../components/StudentRegistrationForm'; // Import the registration form component

const StudentRegistrationPage = () => {
  return (
    <div>
      <Navbar /> 
      <h1>Student Registration</h1>
      <StudentRegistrationForm />
    </div>
  );
};

export default StudentRegistrationPage;
