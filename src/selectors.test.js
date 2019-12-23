import { getLibraryList, getBookInfoList } from './selectors'

const allLibraryList = [{
  libraryID: "Tokyo_Adachi",
  libraryName: "東京都足立区",
  prefecture: "東京都",
  city: "足立区",
  librarySiteUrl: "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
  branches: ["やよい図書館", "中央図書館"],
  isRegistered: true
}, {
  libraryID: "Tokyo_Akiruno",
  libraryName: "東京都あきる野市",
  prefecture: "東京都",
  city: "あきる野市",
  librarySiteUrl: "https://www.library.akiruno.tokyo.jp/index.asp",
  branches: ["中央図書館", "五日市図書館", "増戸分室"],
  isRegistered: false
}, {
  libraryID: "Kanagawa_Aikawa",
  libraryName: "神奈川県愛川町",
  prefecture: "神奈川県",
  city: "愛甲郡愛川町",
  librarySiteUrl: "https://www.town.aikawa.kanagawa.jp/shisetsu/bunka/1427771495785.html",
  branches: ["中津公民館", "半原公民館", "愛川町図書館"],
  isRegistered: false
}, {
  libraryID: "Kanagawa_Ayase",
  libraryName: "神奈川県綾瀬市",
  prefecture: "神奈川県",
  city: "綾瀬市",
  librarySiteUrl: "https://www.ayaselib.jp/",
  branches: ["北の台地区センター", "南部ふれあい会館", "寺尾いずみ会館", "綾瀬市立図書館"],
  isRegistered: false
}];

const bookInfoList = [{
  imageUrl: "http://books.google.com/books/content?id=Pw5NDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title: "PHPﾌﾚｰﾑﾜｰｸLaravel入門",
  authors: [
    "掌田津耶乃"
  ],
  isbn: 9784798052588,
  stockByLibrary: [{
    libraryID: "Tokyo_Adachi",
    bookRentalUrl: "",
    isOwned: false,
    canBeRend: false,
  }]
}, {
  imageUrl: "http://books.google.com/books/content?id=Pw5NDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  title: "javajava",
  authors: [
    "ダニエル"
  ],
  isbn: 443490953,
  stockByLibrary: [{
    libraryID: "Tokyo_Adachi",
    bookRentalUrl: "",
    isOwned: true,
    canBeRend: false,
  }]
}]

const state = {
  userLibraryList: [allLibraryList[0], allLibraryList[1]],
  libraryRegistration: {
    keyword: '',
    prefectural: '',
    city: '',
    isInitialState: false,
    isSucceededRegistration: true,
    libraryList: allLibraryList,
  },
  bookSearch: {
    bookInfoList: bookInfoList,
  },
}

describe('selectors', () => {
  it('getBookInfoList', () => {
    const expectedBookInfoList = [{
      ...bookInfoList[0],
      stockByLibrary: [{
        ...bookInfoList[0].stockByLibrary[0],
        libraryName: "東京都足立区",
        prefecture: "東京都",
        city: "足立区",
        librarySiteUrl: "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
        branches: ["やよい図書館", "中央図書館"],
        isRegistered: true,
      }]
    }, {
      ...bookInfoList[1],
      stockByLibrary: [{
        ...bookInfoList[1].stockByLibrary[0],
        libraryName: "東京都足立区",
        prefecture: "東京都",
        city: "足立区",
        librarySiteUrl: "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
        branches: ["やよい図書館", "中央図書館"],
        isRegistered: true,
      }]
    }];

    expect(getBookInfoList(state)).toEqual(expectedBookInfoList);

  })
});

describe('selectors', () => {
  it('getLibraryList change isRegistered flag', () => {
    const expectedLibraryList = [{
      ...allLibraryList[0],
      isRegistered: true
    }, {
      ...allLibraryList[1],
      isRegistered: true,
    }, {
      ...allLibraryList[2]
    }, {
      ...allLibraryList[3]
    }];
    expect(getLibraryList(state)).toEqual(expectedLibraryList);
  });

  it('getLibraryList filter by keyword', () => {
    const stateWithKeyword = {
      ...state,
      libraryRegistration: {
        ...state.libraryRegistration,
        keyword: '東京都'
      }
    }
    const expectedLibraryList = [{
      ...allLibraryList[0],
      isRegistered: true
    }, {
      ...allLibraryList[1],
      isRegistered: true,
    }];
    expect(getLibraryList(stateWithKeyword)).toEqual(expectedLibraryList);

    const stateWithKeyword2 = {
      ...state,
      libraryRegistration: {
        ...state.libraryRegistration,
        keyword: 'やよい'
      }
    }
    const expectedLibraryList2 = [{
      ...allLibraryList[0],
      isRegistered: true
    }];
    expect(getLibraryList(stateWithKeyword2)).toEqual(expectedLibraryList2);


  });

  it('getLibraryList is given blank userLibraryList', () => {
    const stateWithBlankUserLibraryList = {
      ...state,
      userLibraryList: [],
      libraryRegistration: {
        ...state.libraryRegistration,
        keyword: '東京都'
      }
    }
    const expectedLibraryList = [{
      ...allLibraryList[0],
      isRegistered: false
    }, {
      ...allLibraryList[1],
      isRegistered: false
    }]
    expect(getLibraryList(stateWithBlankUserLibraryList)).toEqual(expectedLibraryList);
  });

  it('getLibraryList is given blank libraryList', () => {
    const stateWithBlankLibraryList = {
      ...state,
      libraryRegistration: {
        ...state.libraryRegistration,
        libraryList: []
      }
    }

    expect(getLibraryList(stateWithBlankLibraryList)).toEqual([]);
  });

});
