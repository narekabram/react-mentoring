import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

export default  class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <h1>Hello World</h1>
                <Footer/>
            </React.Fragment>
        )
    }
}