import React, {PureComponent} from 'react';
import './button.scss';
import Text from "../text/text";

class Button extends PureComponent {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        if(this.props.gotToHomepage) {
           return this.props.gotToHomepage();
        }

        if(this.props.value) {
            this.props.onSort(this.props.value);
        }
    };

    render() {
        return (
            <button onClick={this.handleClick} data-testid={this.props.cypressId} className={'button ' + this.props.className}>
                <Text className='button-text'>{this.props.children}</Text>
            </button>
        );
    }
}

export default Button;
