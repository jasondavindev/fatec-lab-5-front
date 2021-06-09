<template>
  <div>
    <table class="table table-striped" v-if="polls.length">
      <thead>
        <tr>
          <th>Tíulo</th>
          <th>Descrição</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="poll in polls" :key="poll.id">
          <td>{{ poll.title }}</td>
          <td>{{ poll.description }}</td>
          <td>
            <button
              class="btn-primary btn btn-sm"
              v-if="isAdmin()"
              @click="deletePoll(poll.id)"
            >
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-info text-center">
      Não há enquetes cadastradas
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getAllPolls, deletePoll } from '../services/api';

export default {
  name: 'polls',
  data() {
    return {
      polls: [],
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async getPolls() {
      try {
        const { data } = await getAllPolls();
        this.polls = data;
      } catch (error) {
        console.log(error);
      }
    },

    isAdmin() {
      return this.user.role === 'ROLE_ADMIN';
    },

    async deletePoll(id) {
      try {
        const data = await deletePoll(id);

        if (data) this.polls = this.polls.filter((poll) => poll.id !== id);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    console.log(process.env)
    this.getPolls();
  },
};
</script>
