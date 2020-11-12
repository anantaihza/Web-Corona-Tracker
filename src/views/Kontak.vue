<template>
  <div id="kontak">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > Kontak</p>
        <h1 class="py-4">Kontak</h1>
        <p
          class="pt-2 pb-2"
        >Informasi nomor dan alamat rumah sakit yang menjadi rujukan pemeriksaan gejala Covid-19</p>
      </b-container>
    </section>

    <section class="rujukan py-5">
      <b-container class="py-3">
        <b-row>
          <b-col md="6" class="my-auto">
            <h2 class="pb-1">Daftar Rumah Sakit Rujukan</h2>
            <p>Berikut ini adalah kontak rumah sakit yang berada diseluruh Indonesia.</p>
          </b-col>
          <b-col md="6" class="d-none d-sm-block my-auto">
            <img src="@/assets/kontak/doctor.svg" alt width="100%" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="daftar">
      <b-container>
        <div class="srch">
          <b-form-input
            class="search-field"
            placeholder="Cari Provinsi / Kota anda"
            v-model="search"
          />
        </div>
        <b-row>
          <b-col cols="12" md="6" v-for="data in filteredData" :key="data.name">
            <b-card-group deck>
              <b-card class="card my-2 py-2 px-2">
                <h5 class="head">{{ data.name }}</h5>
                <p>{{ data.address }}</p>
                <hr />
                <p>
                  {{ data.region }}
                  <br />
                  <span>{{ data.phone }}</span>
                </p>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kontak",
  data() {
    return {
      search: "",
      dataKontak: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const options = {
        url:
          "https://cors-anywhere.herokuapp.com/dekontaminasi.com/api/id/covid19/hospitals",
        method: "get"
      };
      axios(options)
        .then(response => {
          this.dataKontak = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    filteredData: function() {
      return this.dataKontak.filter(data => {
        return data.region.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
};
</script>

<style scoped>
#kontak {
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
h2 {
  font-weight: 700;
}
.srch {
  padding: 4% 10%;
}
.search-field {
  border: none;
  border-radius: 20px;
  padding: 1.3rem 2rem;
  font-size: 11pt;
}
.card {
  height: 18rem;
  border: none;
  border-radius: 20px;
}
.card p {
  font-size: 11pt;
}
.head,
.card p span {
  font-weight: 600;
}
</style>