import { shallow } from 'enzyme';
import React from 'react';
import Exercise from './exercise';

const setUp=(props={})=>{
    const component=shallow(<Exercise {...props}/>);
    return component;
}

describe('Exercise Component', () => {
    it('should render ExerciseComponent', () => {
        const wrapper=setUp();
        expect(wrapper.find(`[data-test="test-Exercise"]`).length).toBe(1);
    });

    it('should render PaginationComponent', () => {
        const wrapper=setUp();
        expect(wrapper.find(`[data-test="test-Pagnation"]`).length).toBe(1);
    });
});
