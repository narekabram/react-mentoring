import React from 'react';
import { shallow } from 'enzyme';
import Text from './text';

describe('Text', () => {
    it('Adds Text snapshot testing', () => {
        const component = shallow(<Text/>);

        expect(component).toMatchSnapshot();
    });
});
