import { runSaga } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { searchBookSuccess, searchBookFail } from '../books/actions'

describe('books operations test', () => {
  let searchBookSaga;
  let mockSearchBook;

  beforeAll(async () => {
    mockSearchBook = jest.fn()
    jest.mock('../../util/api', () => ({
      searchBook: mockSearchBook
    }));
    searchBookSaga = require('./operations').searchBookSaga
  })

  beforeEach(() => {
    mockSearchBook.mockReset()
  })


  it('cals searchBookSaga with success', async () => {

    const bookInfoList = [
      {
        title: 'title1',
        author: 'author1'
      }, {
        title: 'title2',
        author: 'author2'
      }
    ]
    mockSearchBook.mockResolvedValueOnce(bookInfoList)

    let dispatched = []
    const options = {
      dispatch: (action) => dispatched.push(action),
      getState: () => { }
    }
    const action = {
      keyword: 'keyword1',
      libraryIDList: ['library1', 'library3']
    }
    const result = await runSaga(options, searchBookSaga, action).toPromise();

    expect(mockSearchBook).toBeCalledWith(action.keyword, action.libraryIDList)
    expect(dispatched).toEqual([searchBookSuccess(bookInfoList)])

  })

  it('cals searchBookSaga with error', async () => {

    mockSearchBook.mockRejectedValueOnce(new Error('error'))

    let dispatched = []
    const options = {
      dispatch: (action) => dispatched.push(action),
      getState: () => { }
    }
    const action = {
      keyword: 'keyword1',
      libraryIDList: ['library1', 'library2']
    }
    const result = await runSaga(options, searchBookSaga, action).toPromise();

    expect(mockSearchBook).toBeCalledTimes(1)
    expect(mockSearchBook).toBeCalledWith(action.keyword, action.libraryIDList)
    expect(dispatched).toEqual([searchBookFail(new Error('error'))])

  })


  it('cals searchBookSaga with success , tested by generator', async () => {

    const bookInfoList = [
      {
        title: 'title1',
        author: 'author1'
      }, {
        title: 'title2',
        author: 'author2'
      }
    ]
    mockSearchBook.mockResolvedValueOnce(bookInfoList)

    const action = {
      keyword: 'keyword1',
      libraryIDList: ['library1', 'library3']
    }
    const gen = searchBookSaga(action);
    expect(gen.next().value).toEqual(call(mockSearchBook, action.keyword, action.libraryIDList))
    expect(gen.next(bookInfoList).value).toEqual(put(searchBookSuccess(bookInfoList)))
  })

})