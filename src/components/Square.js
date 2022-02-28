import React from 'react';

const Square = (props) => {
    return (
        <button value={props.value} onClick={props.handleClick} className="element"></button>

    );
}

export default Square;
