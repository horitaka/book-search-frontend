import React from 'react';
import { action } from '@storybook/addon-actions';

import LibraryList from '../LibraryList';

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
  isRegistered: false,
}]

export default {
  component: LibraryList,
  title: 'LibrarySearch|LibraryList',
  includeStories: ['defaultComponent', 'noLibrary']
}

export const defaultComponent = () => (
  <LibraryList libraryList={libraryList} onLibraryAddClickd={action('Library Add')} isInitialState={false} isSucceededRegistration={false}/>
)

export const noLibrary = () => (
  <LibraryList libraryList={[]} onLibraryAddClickd={action('Library Add')} isInitialState={false} isSucceededRegistration={false}/>
)
