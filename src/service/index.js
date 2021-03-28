import axios from 'axios';

const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

function errorHandler(error) {
  if(error.response) {
    throw error.response.data;
  }
  throw error;
}

export default {
  service,

  getAll(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOne(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  }

}