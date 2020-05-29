describe('books selectors', () => {
  it('calls getBookItemsAndStocks', () => {
    const items = [
      { "imageUrl": "http://books.google.com/books/content?id=-snjDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "title": "Vue CLIがわかる！使える！TDDでつくるアプリ開発入門", "authors": ["窓川 ほしき"], "isbn": 0 },
      { "imageUrl": "http://books.google.com/books/content?id=Rh_1To0ryuMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "title": "Vueアドバンスドガイドブック", "authors": ["沖乃綿哉"], "isbn": 9784861003660 },
      { "imageUrl": "http://books.google.com/books/content?id=6biPDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "title": "Vue.js&Nuxt.js超入門", "authors": ["掌田津耶乃"], "isbn": 9784798056593 },
      { "imageUrl": "http://books.google.com/books/content?id=75iWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "title": "Vue.jsのﾂﾎﾞとｺﾂがｾﾞｯﾀｲにわかる本", "authors": ["中田亨"], "isbn": 9784798056494 },
      { "imageUrl": "http://books.google.com/books/content?id=IT6EDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "title": "動かして学ぶ!Vue.js開発入門", "authors": ["森 巧尚"], "isbn": 9784798159089 }
    ]
    const booksStocks = {
      "0": { "Tokyo_Kita": { "status": "Error" }, "Tokyo_Adachi": { "status": "OK", "libkey": {}, "reserveurl": "" } },
      "9784861003660": { "Tokyo_Kita": { "status": "OK", "libkey": {}, "reserveurl": "" }, "Tokyo_Adachi": { "status": "OK", "libkey": {}, "reserveurl": "" } },
      "9784798056593": { "Tokyo_Kita": { "status": "OK", "libkey": {}, "reserveurl": "" }, "Tokyo_Adachi": { "status": "OK", "libkey": {}, "reserveurl": "" } },
      "9784798056494": { "Tokyo_Kita": { "status": "OK", "libkey": { "赤西": "貸出中" }, "reserveurl": "https://www.library.city.kita.tokyo.jp/opac/OPP1500?SELDATA=TOSHO&SSNO=3-0002990480" }, "Tokyo_Adachi": { "status": "OK", "libkey": {}, "reserveurl": "" } },
      "9784798159089": { "Tokyo_Kita": { "status": "OK", "libkey": {}, "reserveurl": "" }, "Tokyo_Adachi": { "status": "OK", "libkey": {}, "reserveurl": "" } }
    }

    const state = {
      books: {
        items: items,
        booksStocks: booksStocks,
      }
    }

    const expectedResult = [

    ]

  })
})