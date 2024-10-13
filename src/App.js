import React from 'react';

function App() {
  const num1 = 5;
  const num2 = 10;
  let message;

  if (num1 > num2) {
    message = num1;
  } else {
    message = num2;
  }

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

