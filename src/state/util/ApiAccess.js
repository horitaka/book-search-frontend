import axios from 'axios';

export default class ApiAccess {

  fetchData(Url) {
    const headers = {'Access-Control-Allow-Origin': '*'}

    return new Promise((resolve, reject) => {
      axios.get(Url, {headers: headers})
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          console.warn(error)
          reject(error)
        })
    })
  }
}
