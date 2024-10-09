import React from 'react';
import './Card.css'

function Card() {
    return (
        <div className="card">
            <img 
                className='card-image'
                src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large_2x.jpg"
                alt="Card"
            />
            <h2 className="card-title">iPhone 16 Pro max</h2>
            <p className="card-description">
            From $1199 or $49.95/mo.per month for 24 mo.monthsFootnote*
            </p>
        </div>
    );
}

export default Card;