import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const apiEndpoint = 'https://swapi.co/api';

export default makeUseAxios({
  axios: axios.create({
    baseURL: apiEndpoint,
  }),
});
