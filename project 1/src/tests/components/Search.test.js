import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from '../../components/Search';
import { existingList, listDefault, unsortedList } from '../fixtures/list';

//should render <Search /> correctly on key press
//should render <Search /> correctly on submit
//should render <Search /> correctly when mounted
//should render <Search /> correctly when toast notifies
//change this.setValue on key press
//doesnt change when key press is invalid


test('should render <Search /> correctly without search', () =>{
    const wrapper = shallow(<Search 
                        existingList={unsortedList}
                    />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})


test('<Search /> - on submit- single input', () =>{
    const wrapper = shallow(<Search 
                        existingList={unsortedList}
                    />);
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{}
    });
     
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    
})
