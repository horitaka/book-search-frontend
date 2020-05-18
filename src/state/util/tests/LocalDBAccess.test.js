import LocalDBAccess from '../LocalDBAccess';


export class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock();


describe('LocalDBAccess loadArrayData', () => {
  beforeEach(() => {
    localStorage.clear();
  })

  it('load array', () => {
    const array = ['a', 'b', 'c'];
    const objectArray = [{
      name: 'Yamada',
      id: '101'
    }, {
      name: 'Taro',
      id: '200'
    }]
    const localDB = new LocalDBAccess();

    localStorage.setItem('array', JSON.stringify(array));
    expect(localDB.loadArrayData('array')).toEqual(array);

    localStorage.setItem('objectArray', JSON.stringify(objectArray));
    expect(localDB.loadArrayData('objectArray')).toEqual(objectArray);

  })

  it('load empty array', () => {
    const localDB = new LocalDBAccess();
    localStorage.setItem('emptyArray', JSON.stringify([]));

    expect(localDB.loadArrayData('emptyArray')).toEqual([]);
  })

  it('load not array', () => {
    const localDB = new LocalDBAccess();

    localStorage.setItem('string', 'abc');
    expect(localDB.loadArrayData('string')).toEqual([]);

    localStorage.setItem('number', 100);
    expect(localDB.loadArrayData('number')).toEqual(100);

  })

  it('null', () => {
    const localDB = new LocalDBAccess();

    expect(localDB.loadArrayData('null')).toEqual([]);
  })

})


describe('LocalDBAccess saveArrayData', () => {
  beforeEach(() => {
    localStorage.clear();
  })

  it('save array data', () => {
    const array = ['a', 'b', 'c'];
    const objectArray = [{
      name: 'Yamada',
      id: '101'
    }, {
      name: 'Taro',
      id: '200'
    }]
    const localDB = new LocalDBAccess();

    localDB.saveArrayData('array', array);
    expect(localStorage.getItem('array')).toEqual(JSON.stringify(array));

    localDB.saveArrayData('objectArray', objectArray);
    expect(localStorage.getItem('objectArray')).toEqual(JSON.stringify(objectArray));

  });

  it('save not array data', () => {
    const localDB = new LocalDBAccess();

    localDB.saveArrayData('string', 'string');
    expect(localStorage.getItem('string')).toEqual(null);

    localDB.saveArrayData('number', 100);
    expect(localStorage.getItem('number')).toEqual(null);

    localDB.saveArrayData('boolean', true);
    expect(localStorage.getItem('boolean')).toEqual(null);

    localDB.saveArrayData('object', {a: 1, b: 'b'});
    expect(localStorage.getItem('object')).toEqual(null);

  })
});
