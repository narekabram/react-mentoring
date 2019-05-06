import React from 'react';
import './film-desc.scss';
import Text from "../text/text";
import Rating from "../rating/rating";

export default class FilmDesc extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='film-desc'>
                <div className='film-desc-image'></div>
                <div className='film-desc-content'>
                    <div className="film-desc-wrapper">
                        <Text className='film-desc-title'>Pulp Fiction</Text>
                        <Rating className="film-desc-rating">4.1</Rating>
                    </div>
                    <Text className='color-white'>Oscar-wining Movies</Text>
                    <div className='film-desc-release-wrapper'>
                        <Text className='color-white bold margin-r-20'>1994</Text>
                        <Text className='color-white bold'>154 min</Text>
                    </div>
                    <Text className='color-white '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.</Text>
                </div>
            </div>
        )
    }
}