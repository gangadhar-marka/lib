// src/components/ContentButtons.js
import React, { useState } from 'react';
import ContentA from './ContentA';
import ContentB from './ContentB';
import ContentC from './ContentC';
import ContentD from './ContentD';

const ContentButtons = () => {
  const [content, setContent] = useState(null);

  const handleButtonClick = (button) => {
    switch (button) {
      case 'A':
        setContent(<ContentA />);
        break;
      case 'B':
        setContent(<ContentB />);
        break;
      case 'C':
        setContent(<ContentC />);
        break;
      case 'D':
        setContent(<ContentD />);
        break;
      default:
        setContent(null);
    }
  };

  return (
    <div>
      {/* Add your 4 content buttons here */}
      <div className="content-buttons">
        <button style={{ fontWeight: 'bold', fontSize: '16px' }} onClick={() => handleButtonClick('A')}>Working hours</button>
        <button style={{ fontWeight: 'bold', fontSize: '16px' }} onClick={() => handleButtonClick('B')}>Gallery</button>
        <button style={{ fontWeight: 'bold', fontSize: '16px' }} onClick={() => handleButtonClick('C')}>Staff</button>
        <button style={{ fontWeight: 'bold', fontSize: '16px' }} onClick={() => handleButtonClick('D')}>E.Resources-OA</button>
      </div>

      {/* Display content in the center */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {content}
      </div>
    </div>
  );
};

export default ContentButtons;
