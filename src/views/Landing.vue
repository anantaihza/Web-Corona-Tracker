<template>
  <div id="lan">
    <section class="intro">
      <b-container>
        <b-row>
          <b-col md="6" class="px-4 py-5">
            <h1>INDONESIA TANGGAP</h1>
            <h1>COVID-19</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis autem voluptatem aliquam enim iste eligendi voluptas hic expedita, fuga ab facilis labore beatae excepturi commodi! Earum dicta fugit quibusdam.</p>
          </b-col>
          <b-col md="6" class="p-5 text-center">Gambar ?</b-col>
        </b-row>
      </b-container>
    </section>
    <section class="data py-5">
      <!-- data indonesia -->
      <b-container>
        <h1 class="text-center pb-3">Corona Virus Overview</h1>
        <br />
        <b-row>
          <b-col lg="6" cl><img src="@/assets/landing/world.svg" alt="" width="100%"></b-col>
          <b-col lg="6" class="my-auto">
            <b-container>
              <h1>Indonesia</h1>
            <hr />
            <b-row>
              <b-col>
                <h5>Positif</h5>
                <h4>{{ total.positif }}</h4>
              </b-col>
              <b-col>
                <h5>Dirawat</h5>
                <h4>{{ total.dirawat }}</h4>
              </b-col>
              <b-col>
                <h5>Sembuh</h5>
                <h4>{{ total.sembuh }}</h4>
              </b-col>
              <b-col>
                <h5>Meninggal</h5>
                <h4>{{ total.meninggal }}</h4>
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
        <h1 class="text-center pb-3" style="color: white;">Jelajahi Data Covid-19 Teraktual</h1>
        <br>
        <div class="conten">
          <b-card-group deck class="group-card">
            <b-card border-variant="white" class="card-style">
              <b-card-text>
                <h5>Data</h5>
                <h3>Indonesia</h3>
                <b-button to="/data-indonesia" class="btn-grad">Lihat</b-button>
              </b-card-text>
            </b-card>
            <b-card border-variant="white" class="card-style">
              <b-card-text>
                <h5>Data</h5>
                <h3>Provinsi Indonesia</h3>
                <b-button to="/data-provinsi" class="btn-grad">Lihat</b-button>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </section>
    <section class="cegah-covid py-5">
      <!-- tulis beberapa pencegahan nya -->
      <b-container>
        <h1 class="text-center pb-3">Upaya</h1>
        <br>
        <b-row>
          <b-col lg="4" class="group-card pt-4">
            <b-card class="compt" title="Title" border-variant="white">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="8" class="group-card pt-4">
            <b-card class="compt" title="Title" border-variant="white">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="8" class="group-card pt-4">
            <b-card class="compt" title="Title" border-variant="white">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="4" class="group-card pt-4">
            <b-card class="compt" title="Title" border-variant="white">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="faq">
      <!-- arahan ke faq -->
      <b-container class="py-5">
        <b-row>
          <b-col>
            <h2>Ada Pertanyaan ?</h2>
            <p>Cari tahu pernyataan yang sering muncul mengenai Covid-19</p>
            <b-button to="/" class="btn-grad">Lihat FAQ</b-button>
          </b-col>
          <b-col></b-col>
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
          console.log('global',response.data.Global)
          this.global = response.data.Global;
          
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>

<style scoped>
#lan {
  background: rgb(234, 246, 250);
}
.group-card .card-style {
  border-radius: 20px;
}
.intro {
  padding: 9rem 0 6rem;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
.jelajah-data {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
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
.compt {
  height: 14rem;
}
.group-card .compt {
  border-radius: 20px;
}
.faq {
  padding: 5rem 0;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
</style>