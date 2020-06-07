import { getStocksByLibrary, getBookItemsAndStocks } from './selectors'

describe('books selectors', () => {
  const items = [{
    "imageUrl": "http://books.google.com/books/content?id=-snjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title": "Vue CLIがわかる！使える！TDDでつくるアプリ開発入門",
    "authors": ["窓川 ほしき"],
    "isbn": 0
  }, {
    "imageUrl": "http://books.google.com/books/content?id=Rh_1To0ryuMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title": "Vueアドバンスドガイドブック", "authors": ["沖乃綿哉"],
    "isbn": 9784861003660
  }, {
    "imageUrl": "http://books.google.com/books/content?id=6biPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "title": "Vue.js&Nuxt.js超入門",
    "authors": ["掌田津耶乃"],
    "isbn": 9784798056593
  }]
  const booksStocks = {
    "9784861003660": [
      { "libraryId": "Tokyo_Kita", "bookRentalUrl": "https://kitaku.com/3660", "isOwned": true, "canBeRend": true },
      { "libraryId": "Tokyo_Adachi", "bookRentalUrl": "https://adachiku.com/3660", "isOwned": true, "canBeRend": false }],
    "9784798056593": [
      { "libraryId": "Tokyo_Kita", "bookRentalUrl": "", "isOwned": false, "canBeRend": false },
      { "libraryId": "Tokyo_Adachi", "bookRentalUrl": "https://adachiku.com/6593", "isOwned": true, "canBeRend": true }],
  }
  const userBookLibraries = [{
    "libraryId": "Tokyo_Kita",
    "libraryName": "東京都北区",
    "prefecture": "東京都",
    "city": "北区",
    "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
    "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
    "isRegistered": false
  }, {
    "libraryId": "Tokyo_Adachi",
    "libraryName": "東京都足立区",
    "prefecture": "東京都",
    "city": "足立区",
    "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
    "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
    "isRegistered": false
  }]


  it('calls getStocksByLibrary', () => {
    const resultWithoutIsbn = [{
      "libraryId": "Tokyo_Kita",
      "bookRentalUrl": "",
      "isOwned": false,
      "canBeRend": false,
      "libraryName": "東京都北区",
      "prefecture": "東京都",
      "city": "北区",
      "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
      "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
      "isRegistered": false,
    }, {
      "libraryId": "Tokyo_Adachi",
      "bookRentalUrl": "",
      "isOwned": false,
      "canBeRend": false,
      "libraryName": "東京都足立区",
      "prefecture": "東京都",
      "city": "足立区",
      "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
      "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
      "isRegistered": false,
    }]
    const resultWithIsbn = [{
      "libraryId": "Tokyo_Kita",
      "bookRentalUrl": "https://kitaku.com/3660",
      "isOwned": true,
      "canBeRend": true,
      "libraryName": "東京都北区",
      "prefecture": "東京都",
      "city": "北区",
      "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
      "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
      "isRegistered": false,
    }, {
      "libraryId": "Tokyo_Adachi",
      "bookRentalUrl": "https://adachiku.com/3660",
      "isOwned": true,
      "canBeRend": false,
      "libraryName": "東京都足立区",
      "prefecture": "東京都",
      "city": "足立区",
      "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
      "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
      "isRegistered": false,
    }]

    expect(getStocksByLibrary('0', booksStocks, userBookLibraries)).toEqual(resultWithoutIsbn)
    expect(getStocksByLibrary('9784861003660', booksStocks, userBookLibraries)).toEqual(resultWithIsbn)

  })

  it('calls getStocksByLibrary without booksStocks', () => {
    const result = [{
      "libraryId": "Tokyo_Kita",
      "bookRentalUrl": "",
      "isOwned": false,
      "canBeRend": false,
      "libraryName": "東京都北区",
      "prefecture": "東京都",
      "city": "北区",
      "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
      "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
      "isRegistered": false,
    }, {
      "libraryId": "Tokyo_Adachi",
      "bookRentalUrl": "",
      "isOwned": false,
      "canBeRend": false,
      "libraryName": "東京都足立区",
      "prefecture": "東京都",
      "city": "足立区",
      "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
      "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
      "isRegistered": false,
    }]

    expect(getStocksByLibrary('0', {}, userBookLibraries)).toEqual(result)
    expect(getStocksByLibrary('333', {}, userBookLibraries)).toEqual(result)

  })

  it('calls getBookItemsAndStocks', () => {
    const state = {
      books: {
        items,
        booksStocks
      },
      userBookLibraries
    }

    const expectedResult = [{
      "imageUrl": "http://books.google.com/books/content?id=-snjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "title": "Vue CLIがわかる！使える！TDDでつくるアプリ開発入門",
      "authors": ["窓川 ほしき"],
      "isbn": 0,
      "stocksByLibrary": [{
        "libraryId": "Tokyo_Kita",
        "bookRentalUrl": "",
        "isOwned": false,
        "canBeRend": false,
        "libraryName": "東京都北区",
        "prefecture": "東京都",
        "city": "北区",
        "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
        "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
        "isRegistered": false,
      }, {
        "libraryId": "Tokyo_Adachi",
        "bookRentalUrl": "",
        "isOwned": false,
        "canBeRend": false,
        "libraryName": "東京都足立区",
        "prefecture": "東京都",
        "city": "足立区",
        "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
        "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
        "isRegistered": false,
      }]
    }, {
      "imageUrl": "http://books.google.com/books/content?id=Rh_1To0ryuMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "title": "Vueアドバンスドガイドブック", "authors": ["沖乃綿哉"],
      "isbn": 9784861003660,
      "stocksByLibrary": [{
        "libraryId": "Tokyo_Kita",
        "bookRentalUrl": "https://kitaku.com/3660",
        "isOwned": true,
        "canBeRend": true,
        "libraryName": "東京都北区",
        "prefecture": "東京都",
        "city": "北区",
        "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
        "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
        "isRegistered": false,
      }, {
        "libraryId": "Tokyo_Adachi",
        "bookRentalUrl": "https://adachiku.com/3660",
        "isOwned": true,
        "canBeRend": false,
        "libraryName": "東京都足立区",
        "prefecture": "東京都",
        "city": "足立区",
        "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
        "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
        "isRegistered": false,
      }],
    }, {
      "imageUrl": "http://books.google.com/books/content?id=6biPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      "title": "Vue.js&Nuxt.js超入門",
      "authors": ["掌田津耶乃"],
      "isbn": 9784798056593,
      "stocksByLibrary": [{
        "libraryId": "Tokyo_Kita",
        "bookRentalUrl": "",
        "isOwned": false,
        "canBeRend": false,
        "libraryName": "東京都北区",
        "prefecture": "東京都",
        "city": "北区",
        "librarySiteUrl": "https://www.library.city.kita.tokyo.jp/",
        "branches": ["上十条図書館", "中央図書館", "中央図書館分室", "昭和町図書館", "東十条図書館", "東田端図書館", "浮間図書館", "滝野川西図書館", "滝野川図書館", "田端図書館", "神谷図書館", "豊島図書館", "赤羽北図書館", "赤羽図書館", "赤羽西図書館"],
        "isRegistered": false,
      }, {
        "libraryId": "Tokyo_Adachi",
        "bookRentalUrl": "https://adachiku.com/6593",
        "isOwned": true,
        "canBeRend": true,
        "libraryName": "東京都足立区",
        "prefecture": "東京都",
        "city": "足立区",
        "librarySiteUrl": "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
        "branches": ["やよい図書館", "中央図書館", "伊興図書館", "佐野図書館", "保塚図書館", "区政資料室", "新田コミュニティ図書館", "東和図書館", "梅田図書館", "江北図書館", "江南コミュニティ図書館", "竹の塚図書館", "興本図書館", "舎人図書館", "花畑図書館", "鹿浜図書館"],
        "isRegistered": false,
      }],
    }]

    expect(getBookItemsAndStocks(state)).toEqual(expectedResult)
  })

  it('calls getBookItemsAndStocks without booksItems', () => {
    const state1 = {
      books: {},
      userBookLibraries
    }
    const state2 = {
      books: {
        items: [],
        booksStocks: [],
      },
      userBookLibraries
    }

    expect(getBookItemsAndStocks(state1)).toEqual([])
    expect(getBookItemsAndStocks(state2)).toEqual([])
  })
})