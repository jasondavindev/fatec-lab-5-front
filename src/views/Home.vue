<template>
  <div class="text-center">
    <h1>Bem vindo!</h1>
    <p>Crie e vote nas enquetes :-)</p>
    <div class="create-poll" v-if="user">
      <router-link v-if="user" to="/create-polls">
        <button class="btn btn-lg btn-primary">Criar Nova Enquete</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: {
    ...mapState(['user']),
  },
};
</script>
