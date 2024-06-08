<script setup>

</script>

<template>
   <div class="row gx-5 justify-content-center">
    <div class="col-lg-11 col-xl-9 col-xxl-8">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Project Card 1-->
          <div class="carousel-item active">
            <div class="card bg-dark text-white border border-primary p-4 rounded-4">
              <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder">Senja Printing </h2>
              <p>Senja Printing adalah perusahaan yang menyediakan layanan kustomisasi sablon dan bordir baju sesuai
                dengan keinginan pelanggan</p>
              <a href="https://senjaprinting.com/" class="text-gradient text-decoration-none" target="_blank">https://senjaprinting.com/</a>
            </div>
            <div class="col-md-6" style="background-image: url('/images/project/1.png'); background-size: contain; background-repeat: no-repeat; background-position: center center; ">
            </div>
          </div>
        </div>
            </div>
          </div>

          <!-- Project Card 2-->
          <div class="carousel-item">
            <div class="card bg-dark text-white border border-primary p-4 rounded-4">
              <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder">Nusantara Chiken </h2>
              <p>Web penyedia jasa untuk pembelian ayam secara online</p>
              <a href="https://nusantarachicken.online/" class="text-gradient text-decoration-none" target="_blank">https://nusantarachicken.online/</a>
            </div>
            <div class="col-md-6" style="background-image: url('/images/project/2.png'); background-size: contain; background-repeat: no-repeat; background-position: center center; ">
            </div>
          </div>
        </div>
            </div>
          </div>

          <!-- Project Card 3-->
          <div class="carousel-item">
            <div class="card bg-dark text-white border border-primary p-4 rounded-4">
              <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder">Aplikasi Web dengan React</h2>
              <p>Web React dengan fitur Memanfaatkan RESTful API sebagai sumber data,Registrasi dan Autentikasi Pengguna,Memproteksi Fitur Catatan,Ubah Tema,Menggunakan Hooks,Memenuhi seluruh kriteria utama submission sebelumnya</p>
              <a type="button" href="https://github.com/KakRevolusio/Membangun-SPA-API-Context-dan-Hooks" class="text-gradient text-decoration-none" target="_blank">https://github.com/KakRevolusio/Membangun-SPA-API-Context-dan-Hooks</a>
            </div>
            <div class="col-md-6" style="background-image: url('/images/project/3.png'); background-size: contain; background-repeat: no-repeat; background-position: center center; ">
            </div>
          </div>
        </div>
            </div>
          </div>

          <!-- Project Card 4-->
          <div class="carousel-item">
            <div class="card bg-dark text-white border border-primary p-4 rounded-4">
              <div class="card-body p-0">
          <div class="row">
            <div class="col-md-6 p-5">
              <h2 class="fw-bolder">Resto Ku</h2>
              <p> Webite yang di gunakan untuk mengecek toko yang ingin di kunjungi dan mendapatkan detai toko mulai hari menu harga dan testimony dari pengguna</p>
            </div>
            <div class="col-md-6" style="background-image: url('/images/project/4.png'); background-size: contain; background-repeat: no-repeat; background-position: center center; ">
            </div>
          </div>
        </div>
            </div>
          </div>
        
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  <div class="text-center mt-4">
    <RouterLink to="/listprojek" class="btn btn-outline-primary btn-lg px-5 py-3 fs-6 fw-bolder">Lihat Semua Project </RouterLink>
      </div>
</template>

<style scoped>
.card:hover {
    background-color: white; 
    color: black;
    transform: scale(1.05); 
    transition: all 0.3s ease; 
}
 </style>