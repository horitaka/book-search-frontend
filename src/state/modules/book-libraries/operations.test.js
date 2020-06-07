import { runSaga } from 'redux-saga'

import { searchLibrarySuccess, searchLibraryFail } from "./actions";

describe('book-libraries operations test', () => {
  let mockSearchLibrary;
  let searchLibrarySaga;

  beforeAll(() => {
    mockSearchLibrary = jest.fn();
    jest.mock('../../util/api', () => ({
      searchLibrary: mockSearchLibrary,
    }));
    searchLibrarySaga = require('./operations').searchLibrarySaga
  });

  beforeEach(() => {
    mockSearchLibrary.mockReset();
  });

  it('calls searchLibrarySaga with success', async () => {
    const action = {
      prefecture: '東京都'
    };

    let dispatched = [];
    const options = {
      dispatch: (action) => dispatched.push(action),
      getState: () => { }
    };

    const libraryList = [
      {
        libraryId: '123',
        name: '北区立図書館'
      }, {
        libraryId: '456',
        name: '港区立図書館'
      }
    ]
    mockSearchLibrary.mockResolvedValue(libraryList)

    await runSaga(options, searchLibrarySaga, action).toPromise();

    expect(mockSearchLibrary).toBeCalledWith(action.prefecture);
    expect(dispatched).toEqual([searchLibrarySuccess(libraryList)]);
  });

  it('calls searchLibrarySaga with error', async () => {
    const action = {
      prefecture: '東京都'
    };

    let dispatched = [];
    const options = {
      dispatch: (action) => dispatched.push(action),
      getState: () => { }
    };

    mockSearchLibrary.mockRejectedValue(new Error('error'))

    await runSaga(options, searchLibrarySaga, action).toPromise();

    expect(mockSearchLibrary).toBeCalledWith(action.prefecture);
    expect(dispatched).toEqual([searchLibraryFail(new Error('error'))]);
  });
})