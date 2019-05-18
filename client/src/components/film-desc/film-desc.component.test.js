import React from 'react';
import { shallow } from 'enzyme';
import FilmDesc from './film-desc';

describe('FilmDesc', () => {
    it('Adds FilmDesc snapshot testing', () => {
        const component = shallow(<FilmDesc/>);

        expect(component).toMatchSnapshot();
    });
});
