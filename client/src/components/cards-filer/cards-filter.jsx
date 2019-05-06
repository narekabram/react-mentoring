import React from 'react';
import './cards-filter.scss';
import Text from "../text/text";

export default class CardsFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='cards-filter'>
                <div className='container'>
                    {this.props.cards  ?
                        <div> isCard</div> :
                        <div className='filter-by'>
                            Films by the same genre
                        </div>}
                </div>
            </div>
        )
    }
}