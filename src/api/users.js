import axios from 'axios';
import config from './../config';

const url = config.api.host;

export const fetchUsers = (page, perPage) => axios.get(`${url}/users`, { params: { page, perPage } });
