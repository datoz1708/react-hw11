import React, { useState } from 'react';
import chameleon from './images/chameleon.jpg';

const ToggleImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleImage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={toggleImage} style={{ display: 'block', margin: '20px auto' }}>
        {isVisible ? 'False' : 'True'}
      </button>

      {isVisible && (
        <img
          src={chameleon}
          alt="Sample"
          style={{ width: '300px', margin: '20px auto', display: 'block' }}
        />
      )}
    </div>
  );
};

export default ToggleImage;
