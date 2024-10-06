import React from 'react';
import Message from './Message';

class App extends React.Component {
  render() {
    return (
      <div>
        <Message firstName="Dato" lastName="Zarandia"/>
      </div>
    );
  }
}

export default App;