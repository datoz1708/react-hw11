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
      <NumbersList numbers={numbersArray} />
    </div>
  );
};

export default App;
