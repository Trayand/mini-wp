<template>
  <div>
    <b-form inline @submit.prevent='loginUser'>
      <!-- <label class="sr-only" for="inline-form-input-username">Username</label> -->
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="email" id="inline-form-input-username" placeholder="Email" v-model="email"></b-input>
      </b-input-group>

      <!-- <label class="sr-only" for="inline-form-input-name">Name</label> -->
      <b-input
        type="password"
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="password"
        v-model="password"
      ></b-input>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios'

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      axios({
        url: "http://localhost:3000/login",
        method: "POST",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({data}) => {
          console.log(data);
          localStorage.setItem("access_token",  data.token );
          this.$emit('data-submited-from-form')
        })
        .catch(err => {
          console.log(err.response.data.message);
          swal(err.response.data.message);
        });
    }
  }
};
</script>

<style>
</style>