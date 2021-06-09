<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/">Home</router-link> |
      <router-link v-if="user" to="/polls">Enquetes</router-link> |
      <a v-if="user" @click="logoutUser">Logout</a>
      <router-link v-else to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['logout']),
    logoutUser() {
      this.logout();
      this.$router.push('/');
    },
  },
};
</script>
