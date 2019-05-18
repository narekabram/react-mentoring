import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input', () => {
    it('Adds Input snapshot testing', () => {
        const component = shallow(<Input/>);

        expect(component).toMatchSnapshot();
    });
});
