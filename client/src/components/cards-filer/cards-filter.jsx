import React from 'react';
import './cards-filter.scss';
import Text from "../text/text";
import {connect} from "react-redux";
import Button from "../button/button";

class CardsFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRating: 'release_date',
        }
    }

    handleSortChange = (value) => {
        this.setState({selectedRating: value});
        this.props.setSortValue(value);
    };

    render() {
        return (
            <div className='cards-filter'>
                <div className='container'>
                    <div className='cards-filter-wrapper'>
                        {this.props.films.length ?
                            <Text>{this.props.films.filter((film) => film.id !== this.props.film.id).length} movies found</Text>
                            :
                            <Text>Films by ////drama genre</Text>
                        }
                        {this.props.films.length ?
                            <div className='filter-by'>
                                <Text>Sort By</Text>
                                <Button value='release_date' onSort={this.handleSortChange}
                                        className={'sort-by ' + (this.state.selectedRating === 'release_date' ? 'selected-rating' : '')}>
                                    date
                                </Button>
                                <Button value='vote_average' onSort={this.handleSortChange}
                                        className={'sort-by ' + (this.state.selectedRating === 'vote_average' ? 'selected-rating' : '')}>
                                    rating
                                </Button>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        films: state.filmsData.films,
        film: state.filmsData.film
    };
};

export default connect(mapStateToProps,
    null)(CardsFilter);
