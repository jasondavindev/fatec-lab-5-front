import axios from 'axios';
import store from '../store';
import router from '../router';

const BASE_URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token;
  }

  return config;
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (!error.response) return;

    if (error.response.status === 403) {
      return alert('Não autorizado!');
    }

    if (error.response.status === 401) {
      store.commit('logout');
      router.push('/login');
    }

    throw error;
  }
);

export default instance;
