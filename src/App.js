import React, { useState } from 'react';

const NumberComponent = () => {
  
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const incrementNumber1 = () => {
    setNumber1(number1 + 1);
  };

  const incrementNumber2 = () => {
    setNumber2(number2 + 2);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>

      <button
        onClick={incrementNumber1}
        style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '10px' }}
      >
        Increase Number 1 by 1
      </button>

      <button
        onClick={incrementNumber2}
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '10px' }}
      >
        Increase Number 2 by 2
      </button>

      <div style={{ marginTop: '30px', fontSize: '24px' }}>
        <p>Number 1: {number1}</p>
        <p>Number 2: {number2}</p>
      </div>
    </div>
  );
};

export default NumberComponent;
