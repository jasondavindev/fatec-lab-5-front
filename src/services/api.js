import axios from './axios';

export const getUser = async (id) => axios.get(`/v1/users/${id}`);
