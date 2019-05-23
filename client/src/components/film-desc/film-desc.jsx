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
                <img className='film-desc-image' src={this.props.film.poster_path}/>
                <div className='film-desc-content'>
                    <div className="film-desc-wrapper">
                        <Text className='film-desc-title'>{this.props.film.title}</Text>
                        <Rating className="film-desc-rating">{this.props.film.vote_average}</Rating>
                    </div>
                    <div className='film-desc-release-wrapper'>
                        <Text className='color-white bold margin-r-20'>{(new Date(this.props.film.revenue * 1000)).getFullYear().toString()}</Text>
                        <Text className='color-white bold'>{this.props.film.runtime} min</Text>
                    </div>
                    <Text className='color-white '>{this.props.film.overview}</Text>
                </div>
            </div>
        )
    }
}
