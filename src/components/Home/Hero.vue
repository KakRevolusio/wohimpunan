<script setup>
import { onMounted } from 'vue';
import ProfilePic from "@/components/Home/ProfilePic.vue";

onMounted(() => {
    var options = {
        strings: [
            "Mahasiswa Informatika Universitas AMIKOM Yogyakarta",
            "Peserta MSIB Studi Independen Dicoding Batch 5",
            "Passionate about Coding, AI, and website developer",
            "Seeking Opportunities to Learn and Grow"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    var typed = new Typed("#typed-output", options);
});
</script>

<template>
  <header class="py-5">
    <div class="container px-5 pb-5">
      <div class="row gx-5 align-items-center">
        <div class="col-xxl-5">
          <!-- Header text content-->
          <div class="text-center text-xxl-start">
            <div class="fs-3 fw-light text-muted"><b>Hello There!</b>👋</div>
            <h1 class="display-3 fw-bolder mb-3">I'm <span class="text-gradient d-inline">Panji Revolusioner.S</span></h1>
            <div class="text-white mb-4">
              <div id="typed-output" class=""></div>
            </div>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
              <RouterLink to="/resume" class="btn btn-outline-primary btn-lg px-5 py-3 fs-6 fw-bolder">Resume</RouterLink>
              <RouterLink to="/about" class="btn btn-outline-secondary btn-lg px-5 py-3 fs-6 fw-bolder">About Me</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-xxl-7">
          <!-- Header profile picture-->
          <div class="d-flex justify-content-center mt-5 mt-xxl-0">
            <ProfilePic/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
/* Tambahkan gaya Anda di sini */
.text-white {
    color: white;
}
</style>
