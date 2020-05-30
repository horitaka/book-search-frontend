import { createSelector } from 'reselect'

export const userBookLibraries = state => state.userBookLibraries;


export const getLibraryIds = createSelector(
  userBookLibraries,
  (userBookLibraries) => {

    const userLibraryIds = userBookLibraries.map(userLibrary => {
      return userLibrary.libraryId;
    })
    return userLibraryIds
  }
)