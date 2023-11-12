// src/components/StudentLoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateRollNo, validatePassword } from '../utils/validation';

const StudentLoginForm = () => {
  const [loginData, setLoginData] = useState({
    rollNo: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    rollNo: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate login data
    const rollNoError = validateRollNo(loginData.rollNo) ? '' : 'Invalid roll number';
    const passwordError = validatePassword(loginData.password) ? '' : 'Invalid password';

    setErrors({
      rollNo: rollNoError,
      password: passwordError,
    });

    // If there are no errors, proceed with login logic
    if (!rollNoError && !passwordError) {
      // Implement the login logic here
      console.log('Login Data:', loginData);
      // Send the data to the backend for authentication
    }
  };

  return (
    <div className="mt-5 container" style={{ backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        <div className="card-body" style={{ width: '300px', backgroundColor: 'white' }}>
          <h2 className="card-title text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="rollNo" className="form-label">
                Roll No:
                <input
                  type="text"
                  id="rollNo"
                  className={`form-control ${errors.rollNo ? 'is-invalid' : ''}`}
                  name="rollNo"
                  value={loginData.rollNo}
                  onChange={handleChange}
                  style={{width:300}}
                />
                <div className="invalid-feedback">{errors.rollNo}</div>
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
                <input
                  type="password"
                  id="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  style={{width:300}}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="mt-2 text-center">
            Don't have an account?{' '}
            <Link to="/student-registration">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginForm;
