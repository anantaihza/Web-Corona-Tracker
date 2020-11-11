<template>
  <div id="lan">
    <section class="intro">
      <b-container>
        <b-row>
          <b-col md="5" class="px-4 py-5 m-auto">
            <h1>
              INDONESIA TANGGAP
              <span>COVID-19</span>
            </h1>
            <p
              class="pt-3"
            >Wujudkan Indonesia Sehat, Aman dan Produktif. Laporkan dan Konsultasikan ke Tim Kesehatan Jika Anda atau Kerabat Dekat Anda Terindikasi Gejala Covid-19.</p>
          </b-col>
          <b-col md="7" class="p-5 text-center d-none d-sm-block">
            <img src="@/assets/landing/intro.svg" alt width="130%" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="data py-5">
      <!-- data indonesia -->
      <b-container>
        <h2 class="text-center pb-3">Corona Virus Overview</h2>
        <br />
        <b-row class="py-3">
          <b-col lg="7" class="m-auto">
            <img src="@/assets/landing/world.svg" alt width="100%" />
          </b-col>
          <b-col lg="5" class="my-auto">
            <b-container>
              <h4 class="my-auto">Global</h4>
              <hr class="mt-1 mb-2" />
              <b-row>
                <b-col cols="6" sm="4" class="py-1">
                  <p class="my-auto">Positif</p>
                  <h5>{{ global.TotalConfirmed | numFor }}</h5>
                </b-col>
                <b-col cols="6" sm="4" class="py-1">
                  <p class="my-auto">Sembuh</p>
                  <h5>{{ global.TotalRecovered | numFor }}</h5>
                </b-col>
                <b-col cols="6" sm="4" class="py-1">
                  <p class="my-auto">Meninggal</p>
                  <h5>{{ global.TotalDeaths | numFor }}</h5>
                </b-col>
              </b-row>
            </b-container>
            <br />
            <b-container class="mt-3">
              <h4>Indonesia</h4>
              <hr class="mt-1 mb-2" />
              <b-row>
                <b-col cols="6" sm="3" class="py-1">
                  <p class="my-auto">Positif</p>
                  <h5>{{ total.positif | numFor }}</h5>
                </b-col>
                <b-col cols="6" sm="3" class="py-1">
                  <p class="my-auto">Dirawat</p>
                  <h5>{{ total.dirawat | numFor }}</h5>
                </b-col>
                <b-col cols="6" sm="3" class="py-1">
                  <p class="my-auto">Sembuh</p>
                  <h5>{{ total.sembuh | numFor }}</h5>
                </b-col>
                <b-col cols="6" sm="3" class="py-1">
                  <p class="my-auto">Meninggal</p>
                  <h5>{{ total.meninggal | numFor }}</h5>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="jelajah-data py-5">
      <!-- yang card  -->
      <b-container>
        <h2 class="text-center pb-3" style="color: white;">Jelajahi Data Covid-19 Teraktual</h2>
        <div class="conten py-5">
          <b-card-group deck class="group-card">
            <b-card class="card-style">
              <b-card-text>
                <b-container class="py-2">
                  <h5>Data</h5>
                  <h3>Indonesia</h3>
                  <div class="text-center py-4">
                    <img src="@/assets/landing/dataindo.svg" alt width="70%" />
                  </div>
                  <br />
                  <b-button to="/data-indonesia" class="btn-grad mt-4">Lihat</b-button>
                </b-container>
              </b-card-text>
            </b-card>
            <b-card class="card-style">
              <b-card-text>
                <b-container class="py-2">
                  <h5>Data</h5>
                  <h3>Provinsi</h3>
                  <div class="text-center py-4">
                    <img src="@/assets/landing/dataprov.svg" alt width="70%" />
                  </div>
                  <br />
                  <b-button to="/data-provinsi" class="btn-grad">Lihat</b-button>
                </b-container>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </section>

    <section class="cegah-covid py-5">
      <!-- tulis beberapa pencegahan nya -->
      <b-container>
        <h2 class="text-center pb-3">Tips - tips Pencegahan penyebaran COVID-19</h2>
        <br />
        <b-row>
          <b-col lg="4" class="group-card pt-4">
            <b-card class="compt">
              <b-container class="pt-4">
                <h4 class="pb-3">Social Distancing</h4>
                <p>Jangan keluar rumah jika tidak ada kebutuhan yang mendesak</p>
              </b-container>
            </b-card>
          </b-col>
          <b-col lg="8" class="group-card pt-4">
            <b-card class="compt">
              <b-container class="pt-4">
                <h4 class="pb-3">Cuci Tangan</h4>
                <p>Cuci tangan  secara rutin. Gunakan sabun atau cairan pembersih tangan berbahan alkohol pada saat mencuci tangan.</p>
              </b-container>
            </b-card>
          </b-col>
          <b-col lg="8" class="group-card pt-4">
            <b-card class="compt">
              
              <b-container class="pt-4">
                <h4 class="pb-3">Mengenakan Masker</h4>
                <p>Selalu kenakan masker pada saat diluar rumah agar terhindar dari virus dan polusi udara.</p>
              </b-container>
            </b-card>
          </b-col>
          <b-col lg="4" class="group-card pt-4">
            <b-card class="compt">
              <b-container class="pt-4">
                <h4 class="pb-3">Bantuan Medis</h4>
                <p>Jika anda merasa terkena gejala berat, segera cari bantuan medis.</p>
              </b-container>
            </b-card>
          </b-col>
        </b-row>
        <div class="selengkapnya text-center pt-4">
          <router-link tag="a" to="/protokol">Lihat Selengkapnya -></router-link>
        </div>
      </b-container>
    </section>

    <section class="faq">
      <!-- arahan ke faq -->
      <b-container class="py-5">
        <b-row>
          <b-col class="my-auto">
            <h2>Ada Pertanyaan ?</h2>
            <p>Cari tahu pernyataan yang sering muncul mengenai Covid-19</p>
            <b-button to="/faq" class="btn-grad mt-4">Lihat FAQ</b-button>
          </b-col>
          <b-col class="text-center d-none d-sm-block">
            <img src="@/assets/landing/questions.svg" alt width="90%" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Landing",
  data() {
    return {
      dataInd: [],
      total: [],
      penambahan: [],
      global: []
    };
  },
  created() {
    this.getDataIndonesia();
    this.getDataGlobal();
  },
  methods: {
    getDataIndonesia() {
      const options = {
        url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/more",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.dataInd = response.data;
          this.total = response.data.total;
          this.penambahan = response.data.penambahan;
          console.log("total", this.total);
          console.log("penambahan", this.penambahan);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getDataGlobal() {
      const options = {
        url: "https://api.covid19api.com/summary",
        method: "get",
        headers: {
          authorization: "5cf9dfd5-3449-485e-b5ae-70a60e997864"
        }
      };
      axios(options)
        .then(response => {
          console.log("global", response.data.Global);
          this.global = response.data.Global;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  filters: {
    numFor: function(value) {
      if (!value) {
        return "0";
      }
      let intPart = Number(value).toFixed(0);
      let intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      return intPartFormat;
    }
  }
};
</script>

<style scoped>
#lan {
  background: rgb(235, 246, 250);
}

.intro {
  padding: 4rem 0 6rem;
  background: white;
  /* background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white; */
}
.intro h1 {
  font-weight: 700;
}
.intro h1 span {
  color: rgb(174, 174, 252);
}

.data h2 {
  font-weight: 700;
}
.data h4 {
  font-weight: 600;
}
.data h5 {
  color: #2f80ed;
}
.data p {
  font-weight: 500;
}

.jelajah-data {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
}
.jelajah-data h2 {
  font-weight: 700;
}
.jelajah-data h3 {
  font-weight: 600;
}
.jelajah-data h5 {
  color: #2f80ed;
  font-weight: 600;
}
.card-style {
  border-radius: 20px;
  border: none;
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
  border-radius: 4px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.cegah-covid h2 {
  font-weight: 700;
}
.cegah-covid .selengkapnya a {
  color: #2f80ed;
  font-weight: 500;
}
.cegah-covid .selengkapnya a:hover {
  color: #56ccf2;
  text-decoration: none;
}
.compt {
  height: 14rem;
  border-radius: 20px;
  border: none;
}
/* .group-card .compt {
  
} */
.faq {
  padding: 4rem 0;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
.faq h2 {
  font-weight: 700;
}

/* #B7B6FB */
</style>