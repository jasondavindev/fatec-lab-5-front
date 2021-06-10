<template>
  <div class="text-center">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="poll-title">Título</label>
        <input
          type="text"
          class="form-control"
          id="poll-title"
          aria-describedby="emailHelp"
          placeholder="Titulo"
          v-model="form.title"
        />
      </div>
      <div class="form-group">
        <label for="poll-description">Descrição</label>
        <input
          type="text"
          class="form-control"
          id="poll-description"
          placeholder="Descrição"
          v-model="form.description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { createPoll } from '../services/api';

export default {
  name: 'createPolls',
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const payload = this.mountPollPayload();
        const data = await createPoll(payload);

        if (!data) return;

        alert('Enquete criada');
        this.$router.push('/polls');
      } catch (error) {
        console.error(error);
      }
    },

    mountPollPayload() {
      return {
        title: this.form.title,
        description: this.form.description,
        owner: {
          id: (this.user || {}).id,
        },
      };
    },
  },
};
</script>
