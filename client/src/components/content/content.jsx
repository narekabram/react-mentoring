import React from 'react';
import './content.scss';
import Text from "../text/text";
import Card from "../card/card";

export default class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content-wrapper'>
                <div className='container'>
                    {/*{this.props.cards  ?*/}
                        <div className='cards'>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className='no-cards'>
                            <Text className='no-films'>No films found</Text>
                        </div>
                    {/*}*/}
                </div>
            </div>
        )
    }
}