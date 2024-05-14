<template>
    <div class="home">
      <h1>Welcome to the Arithmetic Operations App</h1>
      <p>Use the form below to perform basic arithmetic operations.</p>
      <ArithmeticForm />
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
  
  <style scoped>
  .home {
    text-align: center;
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  </style>