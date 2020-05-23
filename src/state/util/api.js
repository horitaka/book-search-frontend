import axios from 'axios';

import config from '../../config';

const get = (url) => {
  const headers = { 'Access-Control-Allow-Origin': '*' }

  return new Promise((resolve, reject) => {
    axios.get(url, { headers: headers })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        console.warn(error)
        reject(error)
      })
  })
}

export const searchLibrary = async (prefecture) => {
  const apiUrl = config.api.url;
  const searchLibraryUrl = apiUrl + '/libraries?prefecture=' + prefecture;

  const libraries = await get(searchLibraryUrl)
  return libraries
}