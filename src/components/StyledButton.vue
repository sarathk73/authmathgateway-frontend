<template>
    <a href="#_" class="relative px-5 py-2 font-medium text-white group" @click="handleClick">
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gray-800 group-hover:bg-gray-900 group-hover:skew-x-12"></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gray-900 group-hover:bg-gray-800 group-hover:-skew-x-12"></span>
      <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-gray-700 -rotate-12"></span>
      <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-gray-600 -rotate-12"></span>
      <span class="relative">{{ text }}</span>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      onClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      handleClick(event) {
        event.preventDefault();
        this.onClick();
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  