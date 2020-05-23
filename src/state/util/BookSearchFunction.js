import LocalDBAccess from './LocalDBAccess';

export default class BookSearchFunction {
  constructor() {
    this.key = 'userLibraryList'
    this.localDB = new LocalDBAccess();
  }

  initUserLibraryList() {
    const userLibraryList = this.localDB.loadArrayData(this.key);
    return userLibraryList;
  }

  initLibraryRegistration() {
    return {
      keyword: '',
      libraryList: [],
      isInitialState: true,
      isSucceededRegistration: false,
    }
  }

  initBookSearch() {
    return {
      isInitialState: true,
      isSearching: false,
      isSucceededSearch: false,
      bookInfoList: [],
    }
  }

  addUserLibrary(library) {
    let userLibraryList = this.localDB.loadArrayData(this.key);

    if (userLibraryList.length > 0) {
      userLibraryList.push(library);
    } else {
      userLibraryList = [library]
    }
    this.localDB.saveArrayData(this.key, userLibraryList);
  }

  deleteUserLibrary(libraryToDelete) {
    let currentUserLibraryList = this.localDB.loadArrayData(this.key);
    let newUserLibraryList = [];

    if (currentUserLibraryList.length > 0) {
      newUserLibraryList = currentUserLibraryList.filter(library => library.libraryID !== libraryToDelete.libraryID)
    }

    this.localDB.saveArrayData(this.key, newUserLibraryList);
  }

}
