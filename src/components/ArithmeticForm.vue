<template>
  <div class="max-w-md mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
    <div class="px-6 py-4 bg-gray-900 text-white">
      <h1 class="text-lg font-bold">Arithmetic Operations</h1>
    </div>
    <div class="px-6 py-8">
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="number1">
          Number 1
        </label>
        <input
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="number1"
          v-model.number="number1"
          type="number"
          placeholder="Enter first number"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="number2">
          Number 2
        </label>
        <input
          class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="number2"
          v-model.number="number2"
          type="number"
          placeholder="Enter second number"
        />
      </div>
      <div class="flex flex-wrap justify-center space-x-2 mb-6">
        <StyledButton text="Add" :onClick="() => performOperation('add')" class="mb-2" />
        <StyledButton text="Subtract" :onClick="() => performOperation('subtract')" class="mb-2" />
        <StyledButton text="Multiply" :onClick="() => performOperation('multiply')" class="mb-2" />
        <StyledButton text="Divide" :onClick="() => performOperation('divide')" class="mb-2" />
      </div>
      <div v-if="result !== null" class="mt-4 text-lg font-semibold">Result: {{ result }}</div>
      <div v-if="errorMessage" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded relative text-center">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StyledButton from './StyledButton.vue';

export default {
  components: {
    StyledButton
  },
  data() {
    return {
      number1: null,
      number2: null,
      result: null,
      errorMessage: ''
    };
  },
  methods: {
    validateInputs() {
      if (this.number1 === null || this.number2 === null) {
        this.errorMessage = 'Please fill in both numbers.';
        return false;
      }
      if (this.number2 === 0 && this.currentOperation === 'divide') {
        this.errorMessage = 'Cannot divide by zero.';
        return false;
      }
      return true;
    },
    async performOperation(operation) {
      this.result = null;
      this.errorMessage = '';
      this.currentOperation = operation;

      if (!this.validateInputs()) {
        return;
      }

      try {
        const response = await axios.post(`http://localhost:3001/api/arithmetic/${operation}`, {
          number1: this.number1,
          number2: this.number2
        }, {
          headers: {
            Authorization: `Bearer ${this.$store.state.accessToken}`
          }
        });
        this.result = response.data.result;
      } catch (error) {
        this.errorMessage = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'An error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>

</style>
