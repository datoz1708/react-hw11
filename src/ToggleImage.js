import React, { useState } from 'react';

const ToggleImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleImage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleImage}>
        {isVisible ? 'Hide Image' : 'Show Image'}
      </button>

      {isVisible && (
        <img
          src="ToggleImage"
          alt="Sample"
          style={{ width: '300px', marginTop: '20px' }}
        />
      )}
    </div>
  );
};

export default ToggleImage;
