import React, {PureComponent} from 'react';
import './header.scss'
import Text from "../text/text";
import Input from "../input";
import Button from "../button/button";
import FilmDesc from "../film-desc/film-desc";

class Header extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='header'>
                <div className='header-cover'>
                    <div className='container'>
                        <div className='header-nav'>
                            <Text className='roulette'>netflixroulette</Text>
                            {this.props.homePage ? null : <Button className='button-search-reverse padding-t-15'>Search</Button> }
                        </div>
                        {this.props.homePage ? <div className='home-page-header'>
                            <Text className='title'>find your movie</Text>
                            <div className='search'>
                                <Input cypressId='search-input' placeholderText='Search'/>
                                <div className='search-bar'>
                                    <div className='search-left'>
                                        <span><Text className='title'>Search by</Text></span>
                                        <span><Button>Title</Button></span>
                                        <span><Button className='gray'>Genre</Button></span>
                                    </div>
                                    <div className='search-right'>
                                        <Button cypressId='search-button' className='search-main-page'>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            :
                        <div>
                            <FilmDesc/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
