<template>
  <div>
    <input v-model="number1" type="number" placeholder="Number 1" />
    <input v-model="number2" type="number" placeholder="Number 2" />
    <button @click="performOperation('add')">Add</button>
    <button @click="performOperation('subtract')">Subtract</button>
    <button @click="performOperation('multiply')">Multiply</button>
    <button @click="performOperation('divide')">Divide</button>
    <div v-if="result !== null">Result: {{ result }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      result: null
    };
  },
  methods: {
    async performOperation(operation) {
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
        console.error(error);
      }
    }
  }
};
</script>