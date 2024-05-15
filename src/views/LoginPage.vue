<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-6">
    <div class="w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Login</h2>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
          v-model="username" 
          type="text" 
          placeholder="Username" 
        />
        <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" 
          v-model="password" 
          type="password" 
          placeholder="Password" 
        />
        <button 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
          @click="login"
        >
          Login
        </button>
        <p v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6 text-center">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      this.errorMessage = ''; 
      try {
        const response = await axios.post('http://localhost:3001/api/auth/authenticate', {
          username: this.username,
          password: this.password
        });
        this.$store.commit('setAccessToken', response.data.accessToken);
        this.$router.push('/');
      } catch (error) {
        this.errorMessage = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Login failed. Please check your credentials.';
      }
    }
  }
};
</script>