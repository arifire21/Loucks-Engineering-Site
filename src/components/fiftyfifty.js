import React from 'react';

export default function SectionFiftyFifty(props){
    return(
    <div className="fifty-fifty">
        <div className="fifty-fifty__item">
            {props.RightItem}
        </div>
        <div className="fifty-fifty__item">
            {props.LeftItem}
        </div>
    </div>
    );
}