<template>
  <div id="faq">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > FAQ</p>
        <h1 class="py-4">Frequently Asked Questions</h1>
        <p class="pt-2 pb-2">Cari Pertanyaan yang Sering Ditanyakan tentang COVID-19</p>
      </b-container>
    </section>
    <section class="answer py-5">
      <b-container>
        <h2 class="pt-3 text-center">Informasi Dasar COVID-19</h2>
        <div>
          <b-card class="mt-5 card-style">
            <b-container>

              <div class="accordion py-3" role="tablist">
               
                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 class="btn-grad text-left">Apa itu COVID-19 ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>COVID-19 adalah penyakit menular yang disebabkan oleh virus corona, SARS-CoV-2, yang merupakan patogen pernapasan. Virus Pertama kali ditemukan di Wuhan, China pada 31 Desember 2019.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 class="btn-grad text-left">Apa saja gejala COVID-19 ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Gejala yang paling umum : 
                          <ul>
                            <li>Demam</li>
                            <li>Batuk kering</li>
                            <li>Kelelahan</li>
                          </ul>
                        </p>
                        <p>Gejala serius :
                          <ul>
                            <li>Kesulitan bernapas atau sesak napas</li>
                            <li>Nyeri dada atau rasa tertekan pada dada</li>
                            <li>Kesulitan untuk berbicara atau bergerak</li>
                            <li>Kehilangan selera makan</li>
                            <li>Suhu tinggi (di atas 38° C)</li>
                          </ul>
                        </p>
                        <p>Gejala yang tidak umum :
                          <ul>
                            <li>Rasa tidak nyaman dan nyeri</li>
                            <li>Nyeri tenggorokan</li>
                            <li>Diare</li>
                            <li>Konjungtivitis (mata merah)</li>
                            <li>Sakit Kepala</li>
                            <li>Hilangnya indera perasa atau penciuman</li>
                            <li>Ruam pada kulit, atau perubahan warna pada jari tangan atau jari kaki</li>
                          </ul>
                          Orang-orang dari segala usia yang mengalami demam atau batuk yang berhubungan dengan kesulitan bernapas atau sesak napas, nyeri atau tekanan dada, atau kesulitan bicara atau bergerak harus segera mencari perawatan medis. Jika memungkinkan, hubungi penyedia layanan kesehatan atau fasilitas kesehatan terlebih dahulu, sehingga Anda dapat diarahkan ke klinik yang terdekat.
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 class="btn-grad text-left">Siapa yang paling berisiko terkena penyakit parah akibat COVID-19?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Orang yang berusia 60 tahun ke atas, dan mereka yang memiliki masalah medis seperti tekanan darah tinggi, masalah jantung dan paru-paru, diabetes, obesitas, atau kanker, berisiko lebih tinggi terkena penyakit serius. Namun, siapa pun dapat jatuh sakit dengan COVID-19 dan menjadi sakit parah atau meninggal pada usia berapa pun.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 class="btn-grad text-left">Bagaimana kita bisa melindungi orang lain dan diri kita sendiri jika kita tidak tahu siapa yang terinfeksi ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Dengan cara mengambil beberapa tindakan pencegahan sederhana, seperti menjaga jarak aman dengan orang lain, mengenakan masker, menjaga ruangan berventilasi baik, menghindari keramaian, rutin mencuci tangan. Selalu mengikuti protokol kesehatan lokal di mana Anda tinggal dan bekerja.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 class="btn-grad text-left">Apa perbedaan antara Isolasi dan Karantina ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Isolasi dan karantina adalah metode pencegahan penyebaran penyakit. Karantina berarti membatasi aktivitas  atau memisahkan orang yang tidak sakit tetapi mungkin terpapar COVID-19. Karantina dapat dilakukan di fasilitas yang ditentukan atau di rumah selama 14 hari. Isolasi artinya memisahkan orang yang sakit dengan gejala COVID-19 atau dengan yang dinyatakan positif.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-6 class="btn-grad text-left">Kapan saya harus menjalani tes COVID-19 ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Siapapun yang mengalami gejala harus dites. Orang yang tidak memiliki gejala tetapi telah melakukan kontak dekat dengan seseorang yang sedang, atau mungkin, terinfeksi juga dapat mempertimbangkan pengujian. Selalu ikuti pedoman kesehatan setempat Anda.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-7 class="btn-grad text-left">Tes apa yang harus saya lakukan untuk mengetahui apakah saya mengidap COVID-19 ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Dalam kebanyakan situasi, tes molekuler digunakan untuk mendeteksi SARS-CoV-2 dan mengkonfirmasi COVID-19. Polymerase chain reaction (PCR) adalah tes molekuler yang paling umum digunakan.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-8 class="btn-grad text-left">Bagaimana dengan rapid test ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Rapid Test (terkadang dikenal sebagai tes diagnostik cepat - RDT) mendeteksi protein virus (dikenal sebagai antigen). Sampel diambil dari hidung dan / atau tenggorokan dengan swab. Tes ini lebih murah daripada PCR dan akan memberikan hasil lebih cepat namun kurang akurat.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-9 class="btn-grad text-left">Berapa lama waktu terpapar COVID-19 hingga muncul gejala-gejala?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Waktu terpapar COVID-19 hingga gejala mulai muncul rata-rata 5-6 hari dan dapat berkisar antara 1-14 hari. Inilah sebabnya mengapa orang yang telah terpapar virus disarankan untuk tinggal di rumah selama 14 hari, untuk mencegah penyebaran virus.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 card-style">
                  <b-card-header header-tag="header" class="head p-1" role="tab">
                    <b-button block v-b-toggle.accordion-10 class="btn-grad text-left">Apakah ada vaksin untuk COVID-19 ?</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>
                        <p>Belum. Banyak vaksin COVID-19 yang sedang dikembangkan, dan beberapa uji klinis besar sehingga hasilnya mungkin akan selesai pada akhir tahun ini. Jika suatu vaksin terbukti aman dan efektif, maka harus disetujui oleh regulator nasional, diproduksi, dan didistribusikan kepada masyarakat sesuai protokol pemerintah.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

              </div>
            </b-container>
          </b-card>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "faq"
};
</script>

<style scoped>
#faq {
  background: rgb(235, 246, 250);
  padding-bottom: 4rem;
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
.answer h2 {
  font-weight: 700;
}
.card-style {
  border: none;
  border-radius: 20px;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );
}
.btn-grad {
  border: none;
  padding: 8px 25px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 20px;
  font-size: 12pt;
  font-weight: 500;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.head {
  background: white;
  border: none;
}
</style>