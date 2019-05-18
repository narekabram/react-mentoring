import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../../style.scss';
import './app.scss';
import Content from "../content/content";
import CardsFilter from "../cards-filer/cards-filter";

export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header homePage={true}/>
                <CardsFilter/>
                <Content></Content>
                <Footer/>
            </div>
        )
    }
}
