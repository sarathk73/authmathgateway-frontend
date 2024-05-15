<template>
  <div id="app" class="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-800">
    <header class="py-4 bg-blue-600 text-white text-center">
      <h1 class="text-2xl font-bold m-0">Arithmetic Operations App</h1>
    </header>
    <main class="flex-1 flex items-center justify-center p-6">
      <router-view />
    </main>
    <footer class="py-4 bg-gray-800 text-white text-center">
      <p class="m-0">&copy; {{ new Date().getFullYear() }} Copyright © 2024 Sarath. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>