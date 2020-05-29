import { createSelector } from 'reselect'

export const userBookLibraries = state => state.userBookLibraries;


export const getLibraryIds = createSelector(
  userBookLibraries,
  (userBookLibraries) => {
    // console.log(userBookLibraries)
    const userLibraryIds = userBookLibraries.map(userLibrary => {
      return userLibrary.libraryID;
    })
    return userLibraryIds
  }
)