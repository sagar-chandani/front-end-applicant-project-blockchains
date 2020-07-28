import React from 'react';
import {shallow} from 'enzyme';
import Dropdown from './components/dropdown';

describe('<Dropdown />', () => {
    it('it renders 1 input', () => {
        const dropdown = dropdown(<Dropdown/>);
        expect(dropdown.find('input').length).toEqual(1);
    });
});