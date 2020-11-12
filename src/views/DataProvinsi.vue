<template>
  <div id="prov">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > Data > Data Provinsi</p>
        <h1 class="py-4">Data Kasus Provinsi di Indonesia</h1>
        <p class="pt-2 pb-2">Data Pemantauan Kasus Covid-19 di Provinsi Indonesia</p>
      </b-container>
    </section>

    <section class="update py-5">
      <b-container>
        <h2 class="pt-3 text-center">Update Terbaru COVID-19 di Provinsi</h2>
        <div class="srch">
          <b-form-input class="search-field" placeholder="Temukan Provinsi" v-model="search" />
        </div>
        <div>
          <b-card class="bg-prov">
            <b-container>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Kasus Provinsi" active>
                  <h4 class="py-3">Kasus Provinsi</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">LOKASI</th>
                          <th scope="col" class="text-center">KASUS</th>
                          <th scope="col" class="text-center">MENINGGAL</th>
                          <th scope="col" class="text-center">DIRAWAT</th>
                          <th scope="col" class="text-center">SEMBUH</th>
                        </tr>
                      </thead>
                      <tbody class="dataset">
                        <tr v-for="data in filteredData" :key="data.provinsi">
                          <td>
                            <p class="head">{{ data.provinsi }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kasus | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.meninggal | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.dirawat | numFor }}</p>
                          </td>
                          <td class="text-center safe">
                            <p>{{ data.sembuh | numFor }}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-tab>
                <b-tab title="Rentan Umur">
                  <h4 class="py-3">Rentan Umur</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">LOKASI</th>
                          <th scope="col" class="text-center">0-5 thn</th>
                          <th scope="col" class="text-center">6-18 thn</th>
                          <th scope="col" class="text-center">19-30 thn</th>
                          <th scope="col" class="text-center">31-45 thn</th>
                          <th scope="col" class="text-center">46-59 thn</th>
                          <th scope="col" class="text-center">≥60 thn</th>
                        </tr>
                      </thead>
                      <tbody class="dataset">
                        <tr v-for="data in filteredData" :key="data.provinsi">
                          <td>
                            <p class="head">{{ data.provinsi }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['0-5_tahun'] | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['6-18_tahun'] | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['19-30_tahun'] | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['31-45_tahun'] | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['46-59_tahun'] | numFor }}</p>
                          </td>
                          <td class="text-center danger">
                            <p>{{ data.kelompok_umur['≥60_tahun'] | numFor }}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-tab>
              </b-tabs>
            </b-container>
          </b-card>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataProvinsi",
  data() {
    return {
      search: "",
      dataProv: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const options = {
        url:
          "https://cors-anywhere.herokuapp.com/apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more",
        method: "get"
      };
      axios(options)
        .then(response => {
          let dataprov = [];
          let prov = response.data;
          prov.map(data => {
            dataprov.push(data);
          });
          this.dataProv = dataprov;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    filteredData: function(){
      return this.dataProv.filter((data) => {
        return data.provinsi.match(this.search.toUpperCase());
      })
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
#prov {
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
.srch {
  padding: 4% 10%;
}
.search-field {
  border: none;
  border-radius: 20px;
  padding: 1.3rem 2rem;
  font-size: 11pt;
}
.intro h1,
.update h2 {
  font-weight: 700;
}
.update h4 {
  font-weight: 600;
}
.dataset p {
  font-size: 11pt;
}
.dataset .head {
  font-weight: 600;
}
.safe {
  color: rgb(29, 216, 29);
}
.danger {
  color: rgb(252, 82, 82);
}
.bg-prov {
  border-radius: 20px;
  border: none;
}
</style>