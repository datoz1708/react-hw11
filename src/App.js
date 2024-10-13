import React, { useState } from 'react';

function App() {
  
  const [count, setCount] = useState(0);

  const incrementByTwo = () => {
    setCount(prevCount => prevCount + 2);
  };

  return (
    <div>
      <p>შედეგი: {count}</p>
      <button onClick={incrementByTwo}>+2</button>
    </div>
  );
}

export default App;
