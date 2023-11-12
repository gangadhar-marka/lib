// src/components/StudentRegistrationForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  validateName,
  validateRollNo,
  validatePhoneNumber,
  validatePassword,
  validateBranch,
  validateYear,
} from '../utils/validation';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    phoneNumber: '',
    password: '',
    branch: '',
    year: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    rollNo: '',
    phoneNumber: '',
    password: '',
    branch: '',
    year: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const nameError = validateName(formData.name) ? '' : 'Invalid name';
    const rollNoError = validateRollNo(formData.rollNo) ? '' : 'Invalid roll number';
    const phoneNumberError = validatePhoneNumber(formData.phoneNumber) ? '' : 'Invalid phone number';
    const passwordError = validatePassword(formData.password) ? '' : 'Invalid password';
    const branchError = validateBranch(formData.branch) ? '' : 'Invalid branch';
    const yearError = validateYear(formData.year) ? '' : 'Invalid year';

    setErrors({
      name: nameError,
      rollNo: rollNoError,
      phoneNumber: phoneNumberError,
      password: passwordError,
      branch: branchError,
      year: yearError,
    });

    // If there are no errors, proceed with registration logic
    if (!nameError && !rollNoError && !phoneNumberError && !passwordError && !branchError && !yearError) {
      // Implement the registration logic here
      console.log('Form Data:', formData);
      // Send the data to the backend for storage
    }
  };

  return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
    <div className="mt-5 container" style={{ backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        <div className="card-body" style={{ width: '650px', backgroundColor: 'white' }}>
          <h2 className="card-title text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-5">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name:
                  <input
                    type="text"
                    id="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </label>
              </div>
              <div className="col">
                <label htmlFor="rollNo" className="form-label">
                  Roll No:
                  <input
                    type="text"
                    id="rollNo"
                    className={`form-control ${errors.rollNo ? 'is-invalid' : ''}`}
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.rollNo}</div>
                </label>
              </div>
              <div className="col">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number:
                  <input
                    type="text"
                    id="phoneNumber"
                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.phoneNumber}</div>
                </label>
              </div>
              <div className="col">
                <label htmlFor="password" className="form-label">
                  Password:
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.password}</div>
                </label>
              </div>
              <div className="col">
                <label htmlFor="branch" className="form-label">
                  Branch:
                  <input
                    type="text"
                    id="branch"
                    className={`form-control ${errors.branch ? 'is-invalid' : ''}`}
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.branch}</div>
                </label>
              </div>
              <div className="col">
                <label htmlFor="year" className="form-label">
                  Year:
                  <input
                    type="text"
                    id="year"
                    className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    style={{width:300}}
                  />
                  <div className="invalid-feedback">{errors.year}</div>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          <p className="mt-2 text-center">
            Already have an account?{' '}
            <Link to="/student-login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default StudentRegistrationForm;
