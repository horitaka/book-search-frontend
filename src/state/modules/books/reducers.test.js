import { setBooksStocksTimeout } from './reducers';

describe('books reducers', () => {
  it('setBooksStocksTimeout', () => {
    const booksStocks = {
      '9784577046722': {
        isBooksStocksFetched: true,
        items: [
          { libraryId: 'Tokyo_Adachi', bookRentalUrl: '', isOwned: false, canBeRend: false },
          { libraryId: 'Tokyo_Arakawa', bookRentalUrl: '', isOwned: false, canBeRend: false }
        ]
      },
      '9784577048146': {
        isBooksStocksFetched: false,
        items: [
          { libraryId: 'Tokyo_Adachi', bookRentalUrl: 'https://url1', isOwned: true, canBeRend: true },
          { libraryId: 'Tokyo_Arakawa', bookRentalUrl: '', isOwned: false, canBeRend: false }
        ]
      },
    }

    const expectedResult = {
      '9784577046722': {
        isBooksStocksFetched: true,
        items: [
          { libraryId: 'Tokyo_Adachi', bookRentalUrl: '', isOwned: false, canBeRend: false },
          { libraryId: 'Tokyo_Arakawa', bookRentalUrl: '', isOwned: false, canBeRend: false }
        ]
      },
      '9784577048146': {
        isBooksStocksFetched: false,
        isTimeout: true,
        items: [
          { libraryId: 'Tokyo_Adachi', bookRentalUrl: 'https://url1', isOwned: true, canBeRend: true },
          { libraryId: 'Tokyo_Arakawa', bookRentalUrl: '', isOwned: false, canBeRend: false }
        ]
      },
    }

    expect(setBooksStocksTimeout(booksStocks)).toEqual(expectedResult);

  })
})