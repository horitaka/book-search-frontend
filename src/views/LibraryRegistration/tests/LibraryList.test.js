// import React from 'react';
// import { shallow } from 'enzyme';

// import LibraryList from '../LibraryList'
// import { showToast } from '../../../common/Toast';

// jest.mock('../../../common/Toast', () => ({
//   showToast: jest.fn(),
// }));

// export const libraryList = [{
//   libraryId: 'Tokyo_Arakawa',
//   libraryName: '東京都荒川区',
//   prefecture: '東京都',
//   city: '荒川区',
//   librarySiteUrl: 'https://www.library.city.arakawa.tokyo.jp/',
//   branches: ['汐入図書SS', '町屋図書館'],
//   isRegistered: true,
// }, {
//   libraryId: 'Tokyo_Bunkyo',
//   libraryName: '東京都文京区',
//   prefecture: '東京都',
//   city: '文京区',
//   librarySiteUrl: 'http://www.lib.city.bunkyo.tokyo.jp/',
//   branches: ['千石図書館', '小石川図書館'],
//   isRegistered: true,
// }, {
//   libraryID: 'Tokyo_NDL',
//   libraryName: '国立国会図書館',
//   prefecture: '東京都',
//   city: '台東区',
//   librarySiteUrl: 'http://www.kodomo.go.jp/',
//   branches: ['子ども図書館'],
//   isRegistered: false,
// }]

// describe('<LibraryList> Component', () => {

//   const onLibraryAddClickdMock = jest.fn();

//   it('render correctly', () => {
//     const wrapper = shallow(<LibraryList libraryList={libraryList} onLibraryAddClickd={onLibraryAddClickdMock} isInitialState={false} />)
//     expect(wrapper).toMatchSnapshot();
//   });

//   describe('when props is normal', () => {
//     const wrapper = shallow(<LibraryList libraryList={libraryList} onLibraryAddClickd={onLibraryAddClickdMock} isInitialState={false} />)

//     it('has three LibraryLink', () => {
//       expect(wrapper.find('LibraryLink')).toHaveLength(libraryList.length);
//     });

//     it('has LibraryLink with href prop', () => {
//       expect(wrapper.find('LibraryLink').at(0).prop('href')).toBe(libraryList[0].librarySiteUrl);
//     });

//     it('has LibraryLink with string text', () => {
//       expect(wrapper.find('LibraryLink').at(0).text()).toBe(libraryList[0].libraryName);
//     });

//     it('has LibraryBranchText with string text', () => {
//       expect(wrapper.find('LibraryBranchText').at(0).text()).toBe('汐入図書SS, 町屋図書館');
//     });

//     it('has AddButton with onclick func prop and 登録 text', () => {
//       expect(wrapper.find('AddButton').at(2).prop('disabled')).toBeFalsy();
//       expect(wrapper.find('AddButton').at(2).text()).toBe('登録');
//       // expect(wrapper.find('AddButton').at(0).prop('onClick')).toBeFunction();
//     });

//     it('has AddButton with disabled prop and 登録済み text', () => {
//       expect(wrapper.find('AddButton').at(0).prop('disabled')).toBeTruthy();
//       expect(wrapper.find('AddButton').at(0).text()).toBe('登録済み');
//     });

//   });

//   describe('when props is libraryList=[]', () => {
//     const wrapper = shallow(<LibraryList libraryList={[]} onLibraryAddClickd={onLibraryAddClickdMock} isInitialState={false} />)

//     it('has AddButton with disabled prop and 登録済み text', () => {
//       expect(wrapper.exists('InstructionText')).toBe(true);
//     });
//   });

//   describe('when props is isInitialState=true', () => {
//     const wrapper = shallow(<LibraryList libraryList={libraryList} onLibraryAddClickd={onLibraryAddClickdMock} isInitialState={true} />)

//     it('return null', () => {
//       expect(wrapper.isEmptyRender()).toEqual(true);
//     });
//   });


//   describe('when AddButton is clicked', () => {
//     const wrapper = shallow(<LibraryList libraryList={libraryList} onLibraryAddClickd={onLibraryAddClickdMock} isInitialState={false} />)

//     it('return null', () => {

//       // 登録可能なボタンをクリック
//       expect(onLibraryAddClickdMock).toHaveBeenCalledTimes(0);
//       wrapper.find('AddButton').at(2).simulate('click');
//       expect(onLibraryAddClickdMock).toHaveBeenCalledTimes(1);
//       expect(onLibraryAddClickdMock).toHaveBeenCalledWith(libraryList[2]);
//       expect(showToast).toHaveBeenCalledTimes(1);

//       // 登録済みボタンのチェック
//       wrapper.find('AddButton').at(0).simulate('click');
//       expect(onLibraryAddClickdMock).toHaveBeenCalledTimes(1); // onclickが実行されていないことを確認する
//       expect(showToast).toHaveBeenCalledTimes(1); // onclickが実行されていないことを確認する

//     });

//   });

// })
