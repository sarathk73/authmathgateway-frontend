<template>
  <div class="home flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
    <h1 class="text-4xl font-bold text-center text-gray-900 mb-6">Welcome to the Arithmetic Operations App</h1>
    <p v-if="!isLoggedIn" class="mb-6 text-gray-700 text-center max-w-md">
      Please log in to perform arithmetic operations.
    </p>
    <p v-else class="mb-6 text-gray-700 text-center max-w-md">
      Use the form below to perform basic arithmetic operations.
    </p>
    
    <div v-if="!isLoggedIn" class="flex flex-col items-center">
      <button @click="goToLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-4">
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