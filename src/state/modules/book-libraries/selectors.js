import { createSelector } from 'reselect'

import { userBookLibrariesSelectors } from '../user-book-libraries'

const bookLibraries = state => state.bookLibraries;


export const getLibraryList = createSelector(
  [bookLibraries, userBookLibrariesSelectors.userBookLibraries],
  (bookLibraries, userBookLibraries) => {
    const filteredLibraryList = filterLibrary(bookLibraries.libraryList, bookLibraries.keyword);
    const flagAddedLibraryList = addRegisteredFlag(filteredLibraryList, userBookLibraries);
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

