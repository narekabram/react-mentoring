import React, {PureComponent} from 'react';
import './header.scss'
import Text from "../text/text";
import Input from "../input";
import Button from "../button/button";
import {getFilms} from "../../actions/film-action";
import {connect} from "react-redux";

class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'title',
            searchText: '',
        };

        this.handleSearchBy = this.handleSearchBy.bind(this);
        this.search = this.search.bind(this);

        this.handleSearchText = (text) => {
            this.state.searchText = text.trim().toLowerCase();
        };
    }

    componentDidMount() {
        if(this.props.match.url !== '/') {
            const search = this.props.match.params.search.substr(7);
            const type = this.props.match.params.genres.substr(5);
            this.props.onGettingFilms(search, type)
        }
    }

    handleSearchBy(key) {
        this.setState({searchBy : key});
    };

    search() {
        this.props.history.push(`/search=${this.state.searchText}/type=${this.state.searchBy}`);
        this.props.onGettingFilms(this.state.searchText, this.state.searchBy)
    }

    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='header'>
                <div className='header-cover'>
                    <div className='container'>
                        <div className='header-nav' onClick={this.handleClick}>
                            <Text className='roulette'>netflixroulette</Text>
                        </div>
                        <div className='home-page-header'>
                            <Text className='title'>find your movie</Text>
                            <div onSubmit={this.handleSubmit} className='search'>
                                <Input OnInputChange={this.handleSearchText} searchText={this.state.searchText}
                                       cypressId='search-input' placeholderText='Search'/>
                                <div className='search-bar'>
                                    <div className='search-left'>
                                        <span><Text className='title'>Search by</Text></span>
                                        <span onClick={() => this.handleSearchBy('title')}>
                                            <Button className={(this.state.searchBy === 'title' ? '' : 'gray')}>
                                                Title
                                            </Button>
                                        </span>
                                        <span onClick={() => this.handleSearchBy('genres')}>
                                            <Button className={(this.state.searchBy === 'genres' ? '' : 'gray')}>
                                                Genre
                                            </Button>
                                        </span>
                                    </div>
                                    <div onClick={this.search} className='search-right'>
                                        <Button cypressId='search-button' className='search-main-page'>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGettingFilms: (text, type) => dispatch(getFilms(text, type)),
});

const mapStateToProps = (state, ownProps) => {
    return {
        films: state.filmsData.films
    };
};

export default connect(mapStateToProps,
    mapDispatchToProps)(Header);
