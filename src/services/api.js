import axios from './axios';

export const signIn = async ({ username, password }) => {
  return axios.post('/v1/users/sign-in', { username, password });
};

export const getAllPolls = async () => axios.get('/v1/polls');

export const deletePoll = async (id) => axios.delete(`/v1/polls/${id}`);
