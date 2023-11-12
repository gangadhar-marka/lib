// src/pages/HiPage.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const HiPage = () => {
  return (
    <div style={{ paddingTop: '120px', textAlign: 'center' }}>
      <Navbar /> {/* Include the Navbar component */}
      <h1>Hi!</h1>
    </div>
  );
};

export default HiPage;
