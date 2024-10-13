import React from 'react';

import image1 from './images/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large_2x.jpg'
import image2 from './images/Samsung-Galaxy-S24-Ultra-Titanium-Grey.jpg'
import image3 from './images/Pixel-9-Pro.jpg'

function App() {
    return (
        <div className="App">
            <img src={image1} width={300} height={300} />
            <img src={image2} width={300} height={300} />
            <img src={image3} width={300} height={300} />
        </div>
    );
}

export default App;

