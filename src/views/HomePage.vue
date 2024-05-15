<template>
  <div class="home flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
    <h1 class="text-4xl font-bold text-center text-gray-900 mb-6">Welcome to the Arithmetic Operations App</h1>
    <p class="mb-6 text-gray-700 text-center max-w-md">Use the form below to perform basic arithmetic operations.</p>
    <ArithmeticForm class="w-full max-w-lg" />
  </div>
</template>
  
<script>
  
  import ArithmeticForm from '../components/ArithmeticForm.vue';
  
  export default {
    components: {
      ArithmeticForm 
    }
  };
</script>