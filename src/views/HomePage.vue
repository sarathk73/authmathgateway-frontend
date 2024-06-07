<template>
  <main class="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
    <a href="#" target="_blank" rel="noreferrer"
        class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
        Inspired by the amazing <span class="font-semibold">Calculator</span> Machine
    </a>
    <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
        Simple and Secure <span class="relative whitespace-nowrap text-orange-400">
            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span class="relative">Arithmetic Operations</span>
        </span>
    </h1>
    <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7 sm:text-lg sm:leading-7 text-base leading-6">
        Want to perform basic arithmetic operations securely and easily? Use our platform to add, subtract, multiply, and divide numbers with ease. 100% free – start your calculations today.
    </p>
    <ArithmeticForm class="w-full max-w-lg mt-8" />
  </main>
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
h1 {
  font-size: 1.875rem; /* text-5xl */
  line-height: 2.25rem; /* leading-7 */
}

@media (min-width: 640px) {
  h1 {
    font-size: 4.5rem; /* sm:text-7xl */
    line-height: 1;
  }
}

p {
  font-size: 1rem; /* text-base */
  line-height: 1.5rem; /* leading-6 */
}

@media (min-width: 640px) {
  p {
    font-size: 1.125rem; /* sm:text-lg */
    line-height: 1.75rem; /* sm:leading-7 */
  }
}
</style>
