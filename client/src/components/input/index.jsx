import React from 'react';
import './input.scss'

const Input = (props) => {
    return (
        <div className={props.className}>
            <input  className='input' type="text" placeholder={props.placeholderText}/>
        </div>
    )
};

export default Input;
