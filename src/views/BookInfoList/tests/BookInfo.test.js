// import React from 'react';
// import { shallow } from 'enzyme';

// import BookInfo from '../BookInfo';


// export const bookInfo = {
//   imageUrl: 'http://books.google.com/books/content?id=RDqQXFA42-kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
//   title: 'Java Script',
//   authors: ['デイビッドフラナガン'],
//   isbn: 9784798052588,
//   stockByLibrary:[{
//     libraryID: 'Tokyo_Adachi',
//     libraryName: '東京都足立区',
//     bookRentalUrl: '',
//     isOwned: true,
//     canBeRend: true,
//   },{
//     libraryID: 'Tokyo_Kita',
//     libraryName: '東京都北区',
//     bookRentalUrl: 'https://www.library.city.kita.tokyo.jp/opac/OPP1500?SELDATA=TOSHO&SSNO=3-0002838076',
//     isOwned: true,
//     canBeRend: false,
//   },{
//     libraryID: 'Tokyo_Bunkyo',
//     libraryName: '東京都文京区',
//     bookRentalUrl: '',
//     isOwned: false,
//     canBeRend: false,
//   }],
// }

// describe('<BookInfo> component', () => {
//   it('render correctly', () => {
//     const wrapper = shallow(<BookInfo bookInfo={bookInfo}/>)
//     expect(wrapper).toMatchSnapshot();
//   });

//   describe('when bookInfo is stockByLibrary=array data', () => {
//     it('has two BookRentalLinks and one Text', () => {
//       const wrapper = shallow(<BookInfo bookInfo={bookInfo}/>)
//       expect(wrapper.find('BookRentalLink')).toHaveLength(2);
//       expect(wrapper.find('Text')).toHaveLength(1);
//     });
//   });

//   describe('when bookInfo is stockByLibrary=one data, isOwned=true, canBeRend=true', () => {
//     it('render BookRentalLink with Text 貸出可', () => {
//       const wrapper = shallow(<BookInfo bookInfo={bookInfo}/>)
//       const bookRentalLink = wrapper.find('BookRentalLink').at(0);
//       expect(bookRentalLink.text()).toBe('貸出可');
//     });
//   });

//   describe('when bookInfo is stockByLibrary=one data, isOwned=true, canBeRend=false', () => {
//     it('render BookRentalLink with Text 貸出中', () => {
//       const wrapper = shallow(<BookInfo bookInfo={bookInfo}/>)
//       const bookRentalLink = wrapper.find('BookRentalLink').at(1);
//       expect(bookRentalLink.text()).toBe('貸出中');
//     });
//   });

//   describe('when bookInfo is stockByLibrary=one data, isOwned=false, canBeRend=any', () => {
//     it('render BookRentalLink with Text 蔵書なし', () => {
//       const wrapper = shallow(<BookInfo bookInfo={bookInfo}/>)
//       const noBookText = wrapper.find('Text');
//       expect(noBookText.text()).toBe('蔵書なし');
//     });
//   });
// });
