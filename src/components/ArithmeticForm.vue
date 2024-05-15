<template>
  <div class="flex flex-col items-center space-y-6">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <input class="border rounded px-4 py-2 w-full md:w-auto" v-model.number="number1" type="number" placeholder="Number 1" />
      <input class="border rounded px-4 py-2 w-full md:w-auto" v-model.number="number2" type="number" placeholder="Number 2" />
    </div>
    <div class="flex flex-wrap justify-center space-x-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="performOperation('add')">Add</button>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="performOperation('subtract')">Subtract</button>
      <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" @click="performOperation('multiply')">Multiply</button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="performOperation('divide')">Divide</button>
    </div>
    <div v-if="result !== null" class="text-lg font-semibold">Result: {{ result }}</div>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      number1: null,
      number2: null,
      result: null,
      errorMessage: ''
    };
  },
  methods: {
    async performOperation(operation) {
      
      this.result = null;
      this.errorMessage = '';

      
      if (this.number1 === null || this.number2 === null) {
        this.errorMessage = 'Please fill in both numbers.';
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