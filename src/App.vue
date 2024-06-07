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
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
              @click="logout"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">Logout</span>
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