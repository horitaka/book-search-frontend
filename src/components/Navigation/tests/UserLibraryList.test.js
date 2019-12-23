import React from 'react';
import {shallow} from 'enzyme';

import UserLibraryList from '../UserLibraryList';
import { showToast } from '../../common/Toast';

jest.mock('../../common/Toast', () => ({
  showToast: jest.fn(),
}));


export const libraryList = [{
  libraryID: 'Tokyo_Arakawa',
  libraryName: '東京都荒川区',
  prefecture: '東京都',
  city: '荒川区',
  librarySiteUrl: 'https://www.library.city.arakawa.tokyo.jp/',
  branches: ['汐入図書SS', '町屋図書館'],
  isRegistered: true,
},{
  libraryID: 'Tokyo_Bunkyo',
  libraryName: '東京都文京区',
  prefecture: '東京都',
  city: '文京区',
  librarySiteUrl: 'http://www.lib.city.bunkyo.tokyo.jp/',
  branches: ['千石図書館', '小石川図書館'],
  isRegistered: true,
},{
  libraryID: 'Tokyo_NDL',
  libraryName: '国立国会図書館',
  prefecture: '東京都',
  city: '台東区',
  librarySiteUrl: 'http://www.kodomo.go.jp/',
  branches: ['子ども図書館'],
  isRegistered: true,
}]

describe('<UserLibraryList> Component', () => {
  it('render', () => {
    const onDeleteClickedMock = jest.fn();
    const wrapper = shallow(<UserLibraryList libraryList={libraryList} onDeleteClicked={onDeleteClickedMock}/>)
    expect(wrapper).toMatchSnapshot();
  });

  describe('when props is normal value', () => {
    const onDeleteClickedMock = jest.fn();
    const wrapper = shallow(<UserLibraryList libraryList={libraryList} onDeleteClicked={onDeleteClickedMock}/>)

    expect(wrapper.find('LibraryListItem')).toHaveLength(libraryList.length);
    expect(wrapper.find('LibraryLink').at(0).prop('href')).toBe('https://www.library.city.arakawa.tokyo.jp/');
    expect(wrapper.find('LibraryLink').at(0).text()).toBe('東京都荒川区');
    expect(wrapper.find('LibraryBranchText').at(0).text()).toBe('汐入図書SS, 町屋図書館');
  });

  describe('when props is libraryList=[]', () => {
    it('render 図書館が登録されていません text', () => {
      const onDeleteClickedMock = jest.fn();
      const wrapper = shallow(<UserLibraryList libraryList={[]} onDeleteClicked={onDeleteClickedMock}/>)
      expect(wrapper.exists('LibraryList')).toBe(false);
      expect(wrapper.exists('LibraryListItem')).toBe(false);
      expect(wrapper.exists('Text')).toBe(true);
      expect(wrapper.find('Text').text()).toBe('図書館が登録されていません');
    })
  });

  describe('when DeleteButton is clicked', () => {
    it('call onDeleteClicked', () => {
      const onDeleteClickedMock = jest.fn();
      const wrapper = shallow(<UserLibraryList libraryList={libraryList} onDeleteClicked={onDeleteClickedMock}/>)

      expect(onDeleteClickedMock).toHaveBeenCalledTimes(0);
      expect(showToast).toHaveBeenCalledTimes(0);

      wrapper.find('DeleteButton').at(0).simulate('click');
      expect(onDeleteClickedMock).toHaveBeenCalledWith(libraryList[0]);
      expect(onDeleteClickedMock).toHaveBeenCalledTimes(1);
      expect(showToast).toHaveBeenCalledTimes(1);

    });
  });
});
