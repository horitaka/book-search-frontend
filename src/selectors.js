import { createSelector } from 'reselect'

const libraryRegistration = state => state.libraryRegistration;
const userLibraryList = state => state.userLibraryList;
const bookInfoList = state => state.bookSearch.bookInfoList;

// Main
export const getBookInfoList = createSelector(
  [userLibraryList, bookInfoList],
  (userLibraryList, bookInfoList) => {
    const newBookInfoList = bookInfoList.map(bookInfo => {

      return ({
        ...bookInfo,
        stockByLibrary: bookInfo.stockByLibrary.map(stock => {
          const libraryInfo = userLibraryList.find(userLibrary => userLibrary.libraryID === stock.libraryID)
          return {
            ...stock,
            ...libraryInfo,
          }
        })
      })
    })
    return newBookInfoList;
  }
)

// Library
export const getLibraryList = createSelector(
  [libraryRegistration, userLibraryList],
  (libraryRegistration, userLibraryList) => {
    const filteredLibraryList = filterLibrary(libraryRegistration.libraryList, libraryRegistration.keyword);
    const flagAddedLibraryList = addRegisteredFlag(filteredLibraryList, userLibraryList);
    return flagAddedLibraryList;
  }
)

function filterLibrary(libraryList, keyword) {
  const filteredLibraryList = libraryList.filter(library => {
    const containKeywordInName = (library.libraryName.indexOf(keyword) !== -1);
    const containKeywordInBranches = library.branches.some(branch => branch.indexOf(keyword) !== -1)
    const containKeywordInPref = (library.prefecture.indexOf(keyword) !== -1);
    const containKeywordInCity = (library.city.indexOf(keyword) !== -1);
    return containKeywordInName || containKeywordInBranches || containKeywordInPref || containKeywordInCity;
  })

  return filteredLibraryList;
}

function addRegisteredFlag(allLibraryList, userLibraryList) {
  const filteredLibraryList = allLibraryList.map(library => {
    if (!Array.isArray(userLibraryList)) {
      return library;
    }

    const isRegistered = userLibraryList.some(userLibrary => {
      return userLibrary.libraryID === library.libraryID
    })

    return {
      ...library,
      isRegistered: isRegistered
    }

  })
  return filteredLibraryList;
}


export const getLibraryIDList = createSelector(
  userLibraryList,
  (userLibraryList) => {
    // console.log(userLibraryList)
    const userLibraryIDList = userLibraryList.map(userLibrary => {
      return userLibrary.libraryID;
    })
    return userLibraryIDList
  }
)
