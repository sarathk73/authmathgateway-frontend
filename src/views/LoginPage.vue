<template>
    <div>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3001/api/auth/authenticate', {
            username: this.username,
            password: this.password
          });
          this.$store.commit('setAccessToken', response.data.accessToken);
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
 </script>