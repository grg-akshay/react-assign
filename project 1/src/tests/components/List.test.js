import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import List from '../../components/List';
import { existingList, listDefault } from '../fixtures/list';

test('should render <List /> correctly without search', () =>{
    const wrapper = shallow(<List 
                        existingList={existingList}
                        filteredList={listDefault}
                    />);
     expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render <List /> correctly with empty array', () =>{
    const wrapper = shallow(<List 
                        existingList={[]}
                        filteredList={listDefault}
                    />);
     expect(toJSON(wrapper)).toMatchSnapshot();
})