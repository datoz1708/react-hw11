// App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
 
  showAlert = (message) => {
    window.alert(message);
  }

  render() {
    return (
      <div>
        <Header />
        
        <button onClick={() => this.showAlert('გამარჯობა, მსოფლიო')} style={{ display: 'block', margin: '20px auto', padding: '10px 20px' }}>
          Click me
        </button>
        
        <Footer />
      </div>
    );
  }
}

export default App;
