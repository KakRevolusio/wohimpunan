<!-- App.vue -->
<template>
  <div :data-bs-theme="darkMode ? 'dark' : 'light'">
    <div class="d-flex flex-column justify-content-between" style="min-height: 100vh;">
      <main class="flex-shrink-0">
        <Navbar :darkMode="darkMode" @toggleDarkMode="toggleDarkMode"/>
        <RouterView />
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import { ref } from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

</script>

<style>
/* Styles for dark mode */
[data-bs-theme="dark"] {
  background-color: #121212;
  color: #fff;
}

/* Styles for light mode */
[data-bs-theme="light"] {
  background-color: #f8f9fa;
  color: #000;
}
</style>
