<script setup>

import Project from "@/components/Project/Project.vue";
</script>

<template>
  <div class="container px-5 my-5">
    <div class="text-center mb-5">
      <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Project</span></h1>
    </div>

<!--    Project -->
    <Project/>
  </div>

  <section class="py-5 bg-gradient-primary-to-secondary text-white">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
        <RouterLink class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" to="/contact">Contact me</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>