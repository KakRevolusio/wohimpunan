<script setup>

</script>

<template>
  <section class="py-5">
        <div class="container px-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-xxl-8">
                    <div class="card text-center my-5 p-4">
                        <div class="card-body">
                            <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                            <h3 class="lead fw-light mb-4">My name is <b>Panji Revolusioner Saputro</b></h3>
                            <p class="">
                                Mahasiswa Informatika yang tertarik pada bidang website developer. Saya memiliki pengalaman dalam bahasa pemrograman seperti HTML, CSS dan JavaScript, serta memiliki pengalaman dalam framework seperti ReactJs dan Codeigniter. Saya juga sangat tertarik dengan pengembangan website menggunakan framework frontend seperti Bootstrap dan Tailwind untuk membuat website responsif dan mudah diakses. Saya selalu mengikuti perkembangan terkini dalam dunia web programming dan terus memperdalam ilmu dan keterampilan saya.
                            </p>
                            <div class="d-flex justify-content-center fs-2 gap-4">
                                <a class="text-gradient" href="https://github.com/KakRevolusio" target="_blank"><i class='bx bxl-github'></i></a>
                                <a class="text-gradient" href="https://www.linkedin.com/in/panji-revolusioner/" target="_blank"><i class='bx bxl-linkedin'></i></a>
                                <a class="text-gradient" href="https://www.instagram.com/sipanjirevo/" target="_blank"><i class='bx bxl-instagram'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <img src="/images/giphy.webp" alt="Animated Image" class="animated-image">
</template>

<style scoped>

        .card {
            border: 2px solid blue;
            background-color: black;
            color: white;
            transition: transform 0.3s, background-color 0.3s, color 0.3s;
        }
        .card:hover {
            transform: scale(1.05);
            background-color: white;
            color: black;
            
        }
        .text-gradient {
            background: -webkit-linear-gradient(#ff6b6b, #f9ca24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .fs-2 .text-gradient:hover {
            color: #f9ca24;
        }
        .animated-image {
            position: fixed;
            bottom: 10px;
            left: -150px; /* initial position outside the viewport */
            width: 150px;
            height: auto;
            animation: moveImage 10s linear infinite;
        }
        @keyframes moveImage {
            0% { left: -150px; }
            100% { left: 100%; }
        }
</style>
