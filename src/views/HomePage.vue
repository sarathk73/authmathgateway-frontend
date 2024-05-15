<template>
  <div class="home flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
    <h1 class="text-4xl font-bold text-center text-white mb-6">Welcome to the Arithmetic Operations App</h1>
    <p v-if="!isLoggedIn" class="mb-6 text-white text-center max-w-md">
      Please log in to perform arithmetic operations.
    </p>
    <p v-else class="mb-6 text-white text-center max-w-md">
      Use the form below to perform basic arithmetic operations.
    </p>
    
    <div v-if="!isLoggedIn" class="flex flex-col items-center">
      <button @click="goToLogin" class="bg-white hover:bg-gray-200 text-blue-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-4">
        Log In
      </button>
    </div>
    <ArithmeticForm v-else class="w-full max-w-lg" />
  </div>
</template>

<script>
import ArithmeticForm from '../components/ArithmeticForm.vue';

export default {
  components: {
    ArithmeticForm
  },
  computed: {
    isLoggedIn() {
      
      return this.$store.state.accessToken !== null;
    }
  },
  methods: {
    goToLogin() {
      
      this.$router.push('/login');
    }
  }
};
</script>