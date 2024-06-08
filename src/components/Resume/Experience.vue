<script>
export default {
  data(){
    return {
      experiences:[
        {
          year: "Februari 2024 - sekarang",
          jobs: "Asisten Praktikum",
          company: "Amikom Yogyakarta",
          location: "Yogyakarta",
          description: [
            "Menyusunan dan mengembangkan modul praktikum yang digunakan oleh mahasiswa.",
            "Memastikan semua peralatan laboratorium dalam kondisi baik dan tersedia untuk digunakan",
           
          ]
        },
        {
          year: "Maret 2024 - Mei 2024",
          jobs: "Front End Developer",
          company: "Senja printing",
          location: "Yogyakarta",
          description: [
          "Merancang dan mengembangkan situs web dan aplikasi web menggunakan HTML, CSS, dan JavaScript.",
          "Memastikan kompatibilitas situs web dan aplikasi web di berbagai browser dan perangkat.",
          "Menjaga situs web dan aplikasi web tetap up-to-date.",
          ]
        },
        {
          year: "Agustus 2023 - Januari 2024",
          jobs: "Peserta Studi Independent Bersertifikat Batch 5",
          company: "Dicoding Indonesia",
          location: "Online",
          description: [
          "Belajar membuat aplikasi front-end web dengan kode JavaScript standar ES6, menerapkan WebComponents, Webpack, dan menampilkan data dinamis dari Web API menggunakan AJAX.",
          "Belajar membuat aplikasi back-end sederhana berupa RESTful API menggunakan Node.js.",
          "Belajar membuat aplikasi front-end web yang responsif, memiliki aksesibilitas yang baik, mudah dimaintenance, memiliki sifat native,dapat diuji, dan memiliki performa yang baik.",

          ]
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h2 class="text-primary fw-bolder mb-0">Experience</h2>
<!--      <a class="btn btn-primary px-4 py-3" href="#!">-->
<!--        <div class="d-inline-block bi bi-download me-2"></div>-->
<!--        Download Resume-->
<!--      </a>-->
    </div>

    <div v-for="experience of experiences" :key="'experience-index-' + experience.company" class="card shadow border-0 rounded-4 mb-5">
      <div class="card-body px-3 px-md-5 py-5">
        <div class="row align-items-center gx-5">
          <div class="col text-center text-lg-start mb-4 mb-lg-0">
            <div class="card bg-dark text-white border border-primary p-4 rounded-4">
    <div class="text-primary fw-bolder mb-2">{{experience.year}}</div>
    <div class="small fw-bolder">{{experience.jobs}}</div>
    <div class="small text-muted">{{experience.company}}</div>
    <div class="small text-muted">{{experience.location}}</div>
</div>
          </div>
          <div class="col-lg-8">
            <div>
              <ul class="mb-0">
                <li v-for="desc of experience.description">
                  {{desc}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card:hover {
    background-color: white; 
    color: black;
    transform: scale(1.05); 
    transition: all 0.3s ease; 
}

</style>