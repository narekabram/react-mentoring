import React from 'react';
import './card.scss';
import Text from "../text/text";
import {Link} from "react-router-dom";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className='card' to={`/film/${this.props.film.id}`}>
                <img className='film-image' src={this.props.film.poster_path} />
                <div className='film-info'>
                    <div className='title'>
                        <Text className='card-title'>{this.props.film.title}</Text>
                        <div className='film-release'>{new Date(this.props.film.release_date).getFullYear()}</div>
                    </div>
                    <div className="genre-wrapper">
                        {this.props.film.genres.map((genre, i) => <Text className='film-genre' key={i}>{genre}</Text>)}
                    </div>
                </div>
            </Link>
        )
    }
}
