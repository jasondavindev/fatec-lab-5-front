<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        required
        autofocus
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label for="inputPassword">password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        required
        v-model="password"
      />
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Ok</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
import { signIn } from '../services/api';
import { verifyToken } from '../services/jwt';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations(['setUser', 'setToken']),
    async login() {
      try {
        const { data } = await signIn({
          username: this.username,
          password: this.password,
        });

        this.setUserStore(data.token, data.id);
        this.setToken(data.token);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },

    setUserStore(token, userId) {
      const { user } = verifyToken(token);
      const userJSON = JSON.parse(user);
      userJSON.id = userId;
      this.setUser(userJSON);
    },
  },
};
</script>
