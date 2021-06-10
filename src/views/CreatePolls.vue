<template>
  <div class="text-center">
		<form @submit="onSubmit" >
      <form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <form-input
          id="input-2"
          v-model="form.title"
          placeholder="Enter name"
          required
        ></form-input>
      </form-group>

      <button type="submit" variant="primary">Submit</button>
		</form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {	
	name: 'home',
  computed: {
    ...mapState(['user']),
  },
	data() {
		return {
			form: {
				title: '',
				description: ''
			}
		}
	},
	methods: {
		onSubmit(event) {
			event.preventDefault()
			alert(JSON.stringify(this.form))
		}
	}
}
</script>

<style>

</style>