import React, {PureComponent} from 'react';
import './button.scss';
import Text from "../text/text";

const Button = (props) => {
    return (
        <button className={'button ' + props.className} >
            <Text className='button-text'>{props.children}</Text>
        </button>
    );
};

export default Button;