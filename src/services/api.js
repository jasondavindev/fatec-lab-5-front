import axios from './axios';

export const signIn = async ({ username, password }) =>
  axios.post('/v1/users/sign-in', { username, password });
