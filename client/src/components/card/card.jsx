import React from 'react';
import './card.scss';
import Text from "../text/text";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card'>
                <div className='film-image'></div>
                <div className='film-info'>
                    <div className='title'>
                        <Text className='card-title'>film title</Text>
                        <div className='film-release'>1997</div>
                    </div>
                    <Text className='film-genre'>test genre</Text>
                </div>
            </div>
        )
    }
}