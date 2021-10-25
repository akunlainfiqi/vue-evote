<script setup>
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <header class="bg-white shadow" v-if="$route.meta.title !=='login'">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="container flex justify-between">
          <a href="/">
            <img src="@/assets/logo.png" alt="logo evote" srcset="">
          </a>
          <div class="inline-grid grid-cols-4 text-xl font-medium text-center font-Poppins">
            <a href="Calon" class="px-4">Calon</a>
            <a href="Timeline" class="px-4">Timeline</a>
            <a href="Vote" class="px-4">Voting</a>
            <a href="Login" class="px-4">Login</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="bg-main" v-if="$route.meta.title !=='login'">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="container flex items-center justify-between">
          <h1 class="inline-block text-lg text-white align-bottom font-Poppins">© 2021 Evote</h1>
          <img src="@/assets/logo.png" alt="logo evote" srcset="">
        </div>
      </div>
    </footer>
  </div>
</template>
