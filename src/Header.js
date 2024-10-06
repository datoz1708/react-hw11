import React from 'react';

function Header() {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
