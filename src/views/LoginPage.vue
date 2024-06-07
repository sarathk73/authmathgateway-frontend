<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-2xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-8 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-lg mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Login</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input
                  autocomplete="off"
                  id="username"
                  v-model="username"
                  type="text"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Username"
                />
                <label
                  for="username"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Username
                </label>
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  v-model="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  placeholder="Password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div class="relative flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  v-model="rememberMe"
                  class="mr-2"
                />
                <label for="rememberMe" class="text-gray-600">Remember Me</label>
              </div>
              <div class="relative">
                <button
                  class="bg-cyan-500 text-white rounded-md px-4 py-2"
                  @click="login"
                >
                  Submit
                </button>
              </div>
              <p v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6 text-center">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: this.$store.getters.username,
      password: '',
      rememberMe: this.$store.getters.rememberMe,
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      this.errorMessage = ''; 

      
      if (!this.username.trim() || !this.password.trim()) {
        this.errorMessage = 'Please fill in all the fields.';
        return;
      }

      try {
        const response = await axios.post('http://localhost:3001/api/auth/authenticate', {
          username: this.username,
          password: this.password
        });
        this.$store.dispatch('login', { token: response.data.accessToken, rememberMe: this.rememberMe, username: this.username });
        this.$router.push('/');
      } catch (error) {
        if (error.response) {
          if (error.response.status === 429) {
            this.errorMessage = 'Too many requests. Please try again later.';
          } else if (error.response.data && error.response.data.message) {
            this.errorMessage = error.response.data.message;
          } else {
            this.errorMessage = 'Login failed. Please check your credentials.';
          }
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      }
    }
  }
};
</script>

<style scoped>

</style>