import React from 'react';
import './text.scss';

const Text = (props) => {
    return (
        <p className={'text ' + props.className}>{props.children}</p>
    )
};

export default Text;
