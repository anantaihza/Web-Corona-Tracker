<template>
  <div id="pencegahan">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > Protokol Kesehatan</p>
        <h1 class="py-4">Protokol Kesehatan</h1>
        <p class="pt-2 pb-2">Upaya yang dapat dilakukan pada saat masa pandemi.</p>
      </b-container>
    </section>
    <section class="tips py-5">
      <b-container>
        <h2 class="text-center pb-2">Tips - tips Pencegahan Penyebaran COVID-19</h2>
        <p
          class="text-center"
        >Beberapa hal yang dapat dilakukan untuk mencegah penyebaran Virus Corona :</p>
        <b-row class="pt-3 text-center">
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/sentuhan.svg" alt="">
              <p>Jangan sentuh mata, hidung, atau mulut Anda.</p>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/login.svg" alt="">
              <p>Jangan keluar rumah jika tidak ada kebutuhan yang mendesak</p>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/medic.svg" alt="">
              <p>Jika anda merasa terkena gejala berat, segera cari bantuan medis. </p>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/distancing.svg" alt="">
              <p>Selalu kenakan masker pada saat diluar rumah</p>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/wash.svg" alt="">
              <p>Cuci tangan  secara rutin. Gunakan sabun atau cairan pembersih tangan berbahan alkohol pada saat mencuci tangan.</p>
            </b-card>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-card class="card">
              <img src="@/assets/protokol/empty.svg" alt="">
              <p>Melakukan social distancing dan jaga jarak aman dengan orang lain.</p>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="self-care py-5">
      <b-container>
        <h2 class="text-center pb-5">Perawatan Diri</h2>
        <b-row class="text-justify">
          <b-col sm="12" md="4">
            <p>Jika Anda merasa sakit  segera beristirahat, minum banyak air, dan makan makanan bergizi. Gunakan ruangan yang terpisah dari anggota keluarga Anda, dan jika memungkinkan gunakan kamar mandi khusus. Bersihkan dan lakukan desinfeksi pada permukaan benda yang sering disentuh. Usahakan untuk selalu menjaga rutinitas dan jadwal seperti biasanya.</p>
          </b-col>
          <b-col sm="12" md="4">
            <p>Semua orang harus menjaga pola hidup sehat di rumah. Jaga pola diet yang sehat, tidur cukup, tetap aktif, dan lakukan kontak sosial dengan orang-orang yang Anda sayangi melalui telepon atau internet. Selama masa sulit seperti sekarang, anak-anak membutuhkan kasih sayang dan perhatian lebih dari orang dewasa.</p>
          </b-col>
          <b-col sm="12" md="4">
            <p>Merasa sedih, stres, atau bingung selama krisis merupakan hal yang normal. Berbicara dengan orang yang Anda percaya, seperti teman dan keluarga, dapat membantu. Jika Anda merasa kewalahan, hubungi tenaga kesehatan atau konselor.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="produktif py-5">
      <b-container>
        <h2 class="text-center pb-5">Hal Produktif yang Dapat Dilakukan</h2>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "protokol"
};
</script>

<style scoped>
#pencegahan {
  background: rgb(235, 246, 250);
  padding-bottom: 1rem;
}
.intro {
  padding: 5rem 0 1rem;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
.intro h1 {
  font-weight: 700;
}
.intro p {
  font-weight: 500;
}
.tips h2, 
.self-care h2,
.produktif h2 {
  font-weight: 700;
}
.card {
  border: none;
  background: rgb(235, 246, 250);
}
.card img {
    width: 80%;
    display: block;
    margin: 20px auto;
    height: 8rem;
    object-fit: contain;
}
.self-care {
  color: white;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}
</style>