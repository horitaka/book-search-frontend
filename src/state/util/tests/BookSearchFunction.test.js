import BookSearchFunction from '../BookSearchFunction';
import LocalDBAccess from '../LocalDBAccess';
import { LocalStorageMock } from './LocalDBAccess.test';

global.localStorage = new LocalStorageMock();


const bookSearchFunction = new BookSearchFunction();

describe('BookSearchFunction', () => {
  beforeEach(() => {
    localStorage.clear();
  })

  it('Save and Delete library to DB', () => {
    const library01 = {
      libraryID: "Tokyo_Adachi",
      libraryName: "東京都足立区",
      prefecture: "東京都",
      city: "足立区",
      librarySiteUrl: "http://www.city.adachi.tokyo.jp/toshokan/shisetsu/toshokan/016.html",
      branches: ["やよい図書館", "中央図書館"]
    };
    const library02 = {
      libraryID: "Tokyo_Akiruno",
      libraryName: "東京都あきる野市",
      prefecture: "東京都",
      city: "あきる野市",
      librarySiteUrl: "https://www.library.akiruno.tokyo.jp/index.asp",
      branches: ["中央図書館", "五日市図書館", "増戸分室"]
    };

    const key = 'userLibraryList';
    const localDB = new LocalDBAccess();

    // 初期状態のチェック
    expect(localDB.loadArrayData(key)).toEqual([]);

    // LocalStorageに保存
    bookSearchFunction.addUserLibrary(library01);
    expect(localDB.loadArrayData(key)).toEqual([library01]);
    bookSearchFunction.addUserLibrary(library02);
    expect(localDB.loadArrayData(key)).toEqual([library01, library02]);

    // LocalStorageから削除
    bookSearchFunction.deleteUserLibrary(library01);
    expect(localDB.loadArrayData(key)).toEqual([library02]);
    bookSearchFunction.deleteUserLibrary(library01);
    expect(localDB.loadArrayData(key)).toEqual([library02]);
    bookSearchFunction.deleteUserLibrary(library02);
    expect(localDB.loadArrayData(key)).toEqual([]);
    bookSearchFunction.deleteUserLibrary(library02);
    expect(localDB.loadArrayData(key)).toEqual([]);

  });

});
