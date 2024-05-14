<template>
  <div id="app">
    <header>
      <h1>Arithmetic Operations App</h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Copyright © 2024 Sarath. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

header {
  padding: 1rem;
  background-color: #007bff;
  color: white;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2rem;
}

main {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  padding: 1rem;
  background-color: #343a40;
  color: white;
  text-align: center;
}

footer p {
  margin: 0;
}
</style>