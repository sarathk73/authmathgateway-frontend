<template>
  <div id="app" class="flex flex-col min-h-screen font-sans bg-gray-100 text-gray-800">
    <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex items-center" href="/">
              <span class="ml-2 text-xl font-bold">Arithmetic App</span>
            </a>
          </div>
          <div class="flex items-center justify-end gap-3">
            <a 
              v-if="isAuthenticated"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              @click="logout"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
    <main class="flex-1 flex items-center justify-center p-6 mt-20 md:mt-24">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      console.log('Checking authentication:', this.$store.getters.isAuthenticated); 
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      console.log('Logging out'); 
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
main {
  margin-top: 4rem; 
}

@media (min-width: 768px) {
  main {
    margin-top: 6rem; 
  }
}
</style>