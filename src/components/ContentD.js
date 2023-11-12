import React from 'react';

const ContentD = () => {
  const imageCardStyle = {
    width: '100%',
    margin: '10px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
  };

  const textContainerStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '10px',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateY(100%)',
  };

  const handleHover = (event) => {
    event.currentTarget.querySelector('.image').style.transform = 'scale(0.9)';
    event.currentTarget.querySelector('.text-container').style.transform = 'translateY(0)';
  };

  const handleHoverOut = (event) => {
    event.currentTarget.querySelector('.image').style.transform = 'scale(1)';
    event.currentTarget.querySelector('.text-container').style.transform = 'translateY(100%)';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div
        style={{ width: '50%', margin: '0 5px', position: 'relative' }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://placekitten.com/800/400"
          alt="man"
          style={{ ...imageCardStyle, ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
          Description for Image 1
        </div>
      </div>
      <div
        style={{ width: '50%', margin: '0 5px', position: 'relative' }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src="https://placekitten.com/800/400"
          alt="Image2"
          style={{ ...imageCardStyle, ...imageStyle }}
          className="image"
        />
        <div style={{ ...textContainerStyle }} className="text-container">
          Description for Image 2
        </div>
      </div>
    </div>
  );
};

export default ContentD;
