import { createSelector } from 'reselect'

export const userBookLibraries = state => state.userBookLibraries;


export const getLibraryIDList = createSelector(
  userBookLibraries,
  (userBookLibraries) => {
    // console.log(userBookLibraries)
    const userLibraryIDList = userBookLibraries.map(userLibrary => {
      return userLibrary.libraryID;
    })
    return userLibraryIDList
  }
)