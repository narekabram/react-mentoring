import React from 'react';
import {connect} from "react-redux";
import sortBy from 'lodash.sortby';
import './content.scss';
import Text from "../text/text";
import Card from "../card/card";
import {getFilms} from '../../actions/film-action';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content-wrapper'>
                <div className='container'>
                    {this.props.films.length ?
                        <div className='cards'>
                            {sortBy(this.props.films, i => i[this.props.sortValue]).reverse().map((film, i) => {
                                if(film.id !== this.props.film.id ) {
                                    return <Card film={film} key={i}/>
                                }
                            })}
                        </div>
                        :
                        <div className='no-cards'>
                            <Text className='no-films'>No films found</Text>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGettingFilms: () => dispatch(getFilms()),
});

const mapStateToProps = (state, ownProps) => {
    return {
        films: state.filmsData.films,
        film: state.filmsData.film
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(Content);
