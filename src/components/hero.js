import React from 'react';

export default function Hero(props) {
    return (
    <div className={`hero ${props.extraClass ? props.extraClass : ''}`}>
        <div className="hero__text">
            <h1>{props.title.toUpperCase()}</h1>
        </div>
        <div className="hero__cta">
            {props.children}
        </div>

    </div>
    );
}