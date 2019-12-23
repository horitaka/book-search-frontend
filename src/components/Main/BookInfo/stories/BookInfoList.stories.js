import React from 'react';

import BookInfoList from '../BookInfoList';

const bookInfoList = [{
    imageUrl: 'http://books.google.com/books/content?id=RDqQXFA42-kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: 'Java Script',
    authors: ['デイビッドフラナガン', 'TK'],
    isbn: 9784798052588,
    stockByLibrary:[{
      libraryID: 'Tokyo_Arakawa',
      libraryName: '東京都荒川区',
      prefecture: '東京都',
      city: '荒川区',
      librarySiteUrl: 'https://www.library.city.arakawa.tokyo.jp/',
      branches: ['汐入図書SS', '町屋図書館'],
      bookRentalUrl: '',
      isOwned: true,
      canBeRend: true,
    },{
      libraryID: 'Tokyo_Bunkyo',
      libraryName: '東京都文京区',
      prefecture: '東京都',
      city: '文京区',
      librarySiteUrl: 'http://www.lib.city.bunkyo.tokyo.jp/',
      branches: ['千石図書館', '小石川図書館'],
      bookRentalUrl: 'https://www.library.city.kita.tokyo.jp/opac/OPP1500?SELDATA=TOSHO&SSNO=3-0002838076',
      isOwned: true,
      canBeRend: false,
    }],
  }, {
    imageUrl: 'http://books.google.com/books/content?id=ZpyK8u2kndAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: 'よくわかるJavaScriptの教科書',
    authors: ['たにぐちまこと'],
    isbn: 4408555452,
    stockByLibrary:[{
      libraryID: 'Tokyo_Arakawa',
      libraryName: '東京都荒川区',
      prefecture: '東京都',
      city: '荒川区',
      librarySiteUrl: 'https://www.library.city.arakawa.tokyo.jp/',
      branches: ['汐入図書SS', '町屋図書館'],
      bookRentalUrl: 'https://www.lib.adachi.tokyo.jp/licsxp-opac/WOpacTifTilListToTifTilDetailAction.do?tilcod=1001111258447',
      isOwned: false,
      canBeRend: false,
    },{
      libraryID: 'Tokyo_Bunkyo',
      libraryName: '東京都文京区',
      prefecture: '東京都',
      city: '文京区',
      librarySiteUrl: 'http://www.lib.city.bunkyo.tokyo.jp/',
      branches: ['千石図書館', '小石川図書館'],
      bookRentalUrl: 'https://www.library.city.kita.tokyo.jp/opac/OPP1500?SELDATA=TOSHO&SSNO=3-0003041563',
      isOwned: true,
      canBeRend: true,
    }],
  }]

export default {
  component: BookInfoList,
  title: 'BookSearch|BookInfoList',
}

export const defaultComponent = () => (
  <BookInfoList bookInfoList={bookInfoList} isInitialState={false} isSearching={false} isSucceededSearch={true}/>
)

export const searching = () => (
  <BookInfoList bookInfoList={bookInfoList} isInitialState={false} isSearching={true} isSucceededSearch={true}/>
)

export const searchError = () => (
  <BookInfoList bookInfoList={bookInfoList} isInitialState={false} isSearching={false} isSucceededSearch={false}/>
)
