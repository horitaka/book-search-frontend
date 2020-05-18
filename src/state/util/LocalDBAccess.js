export default class LocalDBAccess {
  loadArrayData(key) {
    const arrayStr = localStorage.getItem(key);
    if(!arrayStr) {
      return [];
    }

    let arrayData = [];
    try {
      arrayData = JSON.parse(arrayStr);
    } catch (e) {
      console.warn(`loadArrayData - load data is not arraystring: ${arrayStr}`);
      console.warn(e);
      arrayData = [];
    }
    return arrayData;
  }

  saveArrayData(key, data) {
    if(Array.isArray(data)) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      console.warn(`${data} is not an array.`)
    }
  }

  loadLocalDB(key) {
    return localStorage.getItem(key);
  }

  saveToLocalDB(key, data) {
    localStorage.setItem(key, data);
  }

}
