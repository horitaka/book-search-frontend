import * as types from './types'

export function addLibrary(library) {
  return {
    type: types.ADD_LIBRARY,
    library: library
  }
}
export function deleteLibrary(library) {
  return {
    type: types.DELETE_LIBRARY,
    library: library
  }
}