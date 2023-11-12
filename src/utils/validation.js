// src/utils/validation.js

// Validation function for name (only letters)
export const validateName = (name) => {
  const regex = /^[A-Za-z]+$/;
  return regex.test(name);
};

// Validation function for roll number (10 digits)
export const validateRollNo = (rollNo) => {
  const regex = /^\d{10}$/;
  return regex.test(rollNo);
};

// Validation function for phone number (10 digits)
export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

// Validation function for password (at least one uppercase, one lowercase, one special character, one digit)
export const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return regex.test(password);
};

// Validation function for branch (only letters)
export const validateBranch = (branch) => {
  const regex = /^[A-Za-z]+$/;
  return regex.test(branch);
};

// Validation function for year (1, 2, 3, 4)
export const validateYear = (year) => {
  const regex = /^[1-4]$/;
  return regex.test(year);
};
