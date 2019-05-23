import React, {PureComponent} from 'react';
import './header.scss'
import Text from "../text/text";
import Button from "../button/button";
import FilmDesc from "../film-desc/film-desc";
import {getFilm} from "../../actions/film-action";
import {connect} from "react-redux";

class HeaderDetailed extends PureComponent {

    componentDidMount() {
        this.props.getFilm(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getFilm(this.props.match.params.id);
            window.scrollTo(0, 0);
        }
    }

    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='header'>
                <div className='header-cover'>
                    <div className='container'>
                        <div className='header-nav'>
                            <Text className='roulette'>netflixroulette</Text>
                            <Button gotToHomepage={this.handleClick} className='button-search-reverse padding-t-15'>
                                Search
                            </Button>
                        </div>
                        <div>
                            <FilmDesc film={this.props.film}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFilm: (id) => dispatch(getFilm(id)),
});

const mapStateToProps = (state, ownProps) => {
    return {
        film: state.filmsData.film
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(HeaderDetailed);
