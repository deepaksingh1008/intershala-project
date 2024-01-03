// Card.js
import React from 'react';


const Card = ({ title, price, }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h5 className="card-title">Course Fee</h5>
                <h1>$500</h1>
                <h5>What's include:</h5>
                <p>5 on demand videos</p>
                <p>2 livestream sessions</p>
                <p>Live D&A sessions with Nityananda Charan Das</p>
                <p>An active whatsapp community</p>
                <button className='btn'>Register today</button>
            </div>
        </div>
    );
};

export default Card;
