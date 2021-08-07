import React from 'react';

export default function Hero(props) {
    return (
    <div className="hero" >
        <div class="hero__text">
            {props.title}
        </div>
        <div class="hero__cta">
            {props.children}
        </div>

    </div>
    );
}