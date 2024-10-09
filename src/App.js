import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <div>
      {numbers.join(', ')}
    </div>
  );
};

const App = () => {
  const numbersArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>რიცხვების სია</h1>
      <NumbersList numbers={numbersArray} />
    </div>
  );
};

export default App;
