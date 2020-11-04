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
          <b-col md="6" class="p-5 text-center">askjfas</b-col>
        </b-row>
      </b-container>
    </section>
    <section class="data py-5">
      <!-- data indonesia -->
      <b-container>
        <h1 class="text-center">Corona Virus Overview</h1>
        <br />
        <b-row>
          <b-col lg="6">jdfsnasdf</b-col>
          <b-col lg="6">
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
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="jelajah-data py-5">
      <!-- yang card  -->
      <b-container>
        <h1 class="text-center" style="color: white;">Jelajahi Data Covid-19 Teraktual</h1>
        <div>
          <b-card-group deck>
            <b-card
              border-variant="white"
              style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            >
              <b-card-text>
                <h5>Data</h5>
                <h3>Indonesia</h3>

                <b-button to="/data-indonesia" class="btn-grad">Lihat</b-button>
              </b-card-text>
            </b-card>

            <b-card
              border-variant="white"
              style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            >
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
        <h1 class="text-center">Upaya</h1>
        <b-row>
          <b-col lg="4" class="pt-4">
            <b-card class="compt" title="Title">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="8" class="pt-4">
            <b-card class="compt" title="Title">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="8" class="pt-4">
            <b-card class="compt" title="Title">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="4" class="pt-4">
            <b-card class="compt" title="Title">
              <b-card-text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="faq py-5">
      <!-- arahan ke faq -->
      <b-container>
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
      penambahan: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
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
    }
  }
};
</script>

<style scoped>
.intro {
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
  /* margin: 10px; */
  padding: 8px 25px;
  text-align: center;
  /* text-transform: uppercase; */
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 20px #eee; */
  border-radius: 4px;
  /* display: block; */
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.compt {
  height: 14rem;
}
.faq {
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
</style>