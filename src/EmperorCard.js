import React from 'react';

function EmperorCard({ emperor }) {

    return (
        <li className="card">
            <h3>{emperor.name}</h3>
            <p>Reign: {emperor.reign}</p>
            <img src={emperor.image} alt={emperor.name} />
        </li>
    )
}

export default EmperorCard;