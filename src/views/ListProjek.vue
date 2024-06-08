<template>
  <div class="text-center mb-5">
      <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Kumpulan Projek</span></h1>
    </div>
  <div class="container mt-5">
    <div class="row">
      <!-- Example of multiple black cards with blue border -->
      <div class="col-md-4 mb-4">
        <div class="card custom-card">
          <img src="/images/project/1.png" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">Senja Printing</h5>
            <p class="card-text card-description">Senja Printing adalah perusahaan yang menyediakan layanan kustomisasi sablon dan bordir baju sesuai
              dengan keinginan pelanggan</p>
            <a href="#" class="btn btn-primary btn-lihat" @click="toggleDescription">Lihat</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card custom-card">
          <img src="/images/project/2.png" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">Nusantara Chiken</h5>
            <p class="card-text card-description">Web penyedia jasa untuk pembelian ayam secara online</p>
            <a href="#" class="btn btn-primary btn-lihat" @click="toggleDescription">Lihat</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card custom-card">
          <img src="/images/project/3.png" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">Aplikasi Web dengan React</h5>
            <p class="card-text card-description">Web React dengan fitur Memanfaatkan RESTful API sebagai sumber data,Registrasi dan Autentikasi Pengguna,Memproteksi Fitur Catatan,Ubah Tema,Menggunakan Hooks,Memenuhi seluruh kriteria utama submission sebelumnya</p>
            <a href="#" class="btn btn-primary btn-lihat" @click="toggleDescription">Lihat</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card custom-card">
          <img src="/images/project/4.png" class="card-img-top" alt="Placeholder Image">
          <div class="card-body">
            <h5 class="card-title">Resto Ku</h5>
            <p class="card-text card-description">Webite yang di gunakan untuk mengecek toko yang ingin di kunjungi dan mendapatkan detai toko mulai hari menu harga dan testimony dari pengguna</p>
            <a href="#" class="btn btn-primary btn-lihat" @click="toggleDescription">Lihat</a>
          </div>
        </div>
      </div>
      <!-- Add more cards here -->
    </div>
  </div>
</template>

<script setup>
  const toggleDescription = (event) => {
    event.target.closest('.card-body').querySelector('.card-description').classList.toggle('show');
  };
</script>

<style scoped>
  .custom-card {
    background-color: #000;
    border: 2px solid #007bff;
    color: #fff;
    transition: transform 0.3s, background-color 0.3s;
  }
  .custom-card:hover {
    transform: scale(1.05);
    background-color: #fff;
    color: #000;
  }
  .card-description {
    display: none;
  }
  .card-description.show {
    display: block;
  }
</style>
