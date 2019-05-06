import React from 'react';
import Text from '../text/text';
import './rating.scss';

const Rating = (props) => {
    return (
        <div className='rating'>
            <Text className='number'>{props.children}</Text>
        </div>
    )
};

export default Rating;
