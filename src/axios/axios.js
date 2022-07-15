import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api/characters',
  headers: {
    Accept: 'applicaton/json',
  },
});
