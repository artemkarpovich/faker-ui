import axios from 'axios';
import config from './../config';

const url = config.api.host;

export const fetchUsers = () => axios.get(`${url}/users`);
