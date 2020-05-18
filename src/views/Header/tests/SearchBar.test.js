import React from 'react';
import {shallow} from 'enzyme';

import SearchBar from '../SearchBar';


describe('<SearchBar> Component', () => {
  let onClickedMock;
  let wrapper;

  beforeEach(() => {
    onClickedMock = jest.fn()
    wrapper = shallow(<SearchBar onSearchClicked={onClickedMock} />);
  })

  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when search button is clicked with keyword', () => {
    it('execute onSearchClicked', () => {

    })
  });

  describe('when search button is clicked without keyword', () => {
    it('doesnt execute onSearchClicked', () => {

    })
  });


})
