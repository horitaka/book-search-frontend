import React from 'react';
import { shallow } from 'enzyme';

import BookInfoList from '../BookInfoList';
import BookInfo from '../BookInfo';
import Loading from '../../../common/Loading';
import { bookInfo } from './BookInfo.test';

describe('<BookInfoList> component', () => {
  it('render correctly', () => {
    const bookInfoList = Array(3).fill(bookInfo);
    const wrapper = shallow(<BookInfoList bookInfoList={bookInfoList} isSearching={false} isSucceededSearch={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when props is bookInfoList=array', () => {
    it('renders BookInfoList', ()=> {
      const bookInfoList = Array(3).fill(bookInfo);
      const wrapper = shallow(<BookInfoList bookInfoList={bookInfoList} isSearching={false} isSucceededSearch={true}/>);
      expect(wrapper.find(BookInfo)).toHaveLength(bookInfoList.length);
    })
  });

  describe('when props is bookInfoList=blank', () => {
    it('renders No BookInfo', ()=> {
      const wrapper = shallow(<BookInfoList bookInfoList={[]} isSearching={false} isSucceededSearch={true}/>);
      expect(wrapper.find(BookInfo).exists()).toEqual(false);
    })
  })

  describe('when props is isSearching=true', () => {
    it('renders Loading component', ()=> {
      const bookInfoList = Array(3).fill(bookInfo);
      const wrapper = shallow(<BookInfoList bookInfoList={bookInfoList} isSearching={true} isSucceededSearch={true}/>);
      expect(wrapper.find(Loading).exists()).toEqual(true);
    })
  });

  describe('when props is isSucceededSearch=false', () => {
    it('renders error message', ()=> {
      const errorMessage = '検索に失敗しました';
      const bookInfoList = Array(3).fill(bookInfo);
      const wrapper = shallow(<BookInfoList bookInfoList={bookInfoList} isSearching={false} isSucceededSearch={false}/>);
      expect(wrapper.find('Text').text()).toEqual(errorMessage);
    })
  });

});
