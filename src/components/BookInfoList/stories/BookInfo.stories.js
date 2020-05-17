import React from 'react';

import BookInfo from '../BookInfo';


const bookInfo = {
  imageUrl: 'http://books.google.com/books/content?id=RDqQXFA42-kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  title: 'Java Script',
  authors: ['デイビッドフラナガン'],
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
}

const bookInfoNotOwned = {
  ...bookInfo,
  stockByLibrary: [{...bookInfo.stockByLibrary[0], isOwned: false}]
}

const bookInfoBorrowed = {
  ...bookInfo,
  stockByLibrary: [{...bookInfo.stockByLibrary[0], canBeRend: false}]
}

export default {
  component: BookInfo,
  title: 'BookSearch|BookInfo'
};

export const defatulComponent = () => (
  <BookInfo bookInfo={bookInfo} />
)

export const notOwned = () => (
  <BookInfo bookInfo={bookInfoNotOwned} />
)

export const borrowed = () => (
  <BookInfo bookInfo={bookInfoBorrowed} />
)
