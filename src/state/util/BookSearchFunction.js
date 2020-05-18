import LocalDBAccess from './LocalDBAccess';
import ApiAccess from './ApiAccess'

export default class BookSearchFunction {
  constructor() {
    this.key = 'userLibraryList'
    this.localDB = new LocalDBAccess();
    this.api = new ApiAccess();
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

  searchLibrary(prefecture) {
    const serverUrl = process.env.REACT_APP_API_URL;
    const searchLibraryUrl = serverUrl + '/libraries?prefecture=' + prefecture;

    return new Promise((resolve, reject) => {
      this.api.fetchData(searchLibraryUrl)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          console.warn(error)
          reject(error)
        })
    })
  }


  addUserLibrary(library) {
    let userLibraryList = this.localDB.loadArrayData(this.key);

    if(userLibraryList.length > 0) {
      userLibraryList.push(library);
    } else {
      userLibraryList = [library]
    }
    this.localDB.saveArrayData(this.key, userLibraryList);
  }

  deleteUserLibrary(libraryToDelete) {
    let currentUserLibraryList = this.localDB.loadArrayData(this.key);
    let newUserLibraryList = [];

    if(currentUserLibraryList.length > 0) {
      newUserLibraryList = currentUserLibraryList.filter(library => library.libraryID !== libraryToDelete.libraryID)
    }

    this.localDB.saveArrayData(this.key, newUserLibraryList);

  }

  searchBook(keyword, libraryIDList) {
    const serverUrl = process.env.REACT_APP_API_URL;
    const keywordQuery = 'keyword=' + keyword;
    const libraryIDListQuery = 'libraryIDList=' + libraryIDList.join(',')
    const bookSearchUrl = serverUrl + '/books?' + keywordQuery + '&' + libraryIDListQuery;

    return new Promise((resolve, reject) => {
      this.api.fetchData(bookSearchUrl)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          console.warn(error)
          reject(error)
        })
    })
  }

}
