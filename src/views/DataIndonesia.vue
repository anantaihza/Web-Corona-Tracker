<template>
  <div id="ind">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > Data > Data Indonesia</p>
        <h1 class="py-4">Data Kasus Indonesia</h1>
        <p class="pt-2 pb-2">Data Pemantauan Kasus Covid-19 di Indonesia</p>
      </b-container>
    </section>

    <section class="update pt-5">
      <b-container>
        <h2 class="pb-3 text-center">Update Terbaru COVID-19 di Indonesia</h2>
        <p class="text-center">Terakhir di Update pada tanggal: {{ penambahan.tanggal }}</p>
        <br />
        <div class="pb-5 pt-3">
          <b-card class="card-style card-head text-center py-3">
            <b-container>
              <b-row>
                <b-col class="my-auto desc">
                  <b-card-text class="text-left">
                    <h4 class="my-auto pb-2">Total Kasus Terkonfirmasi</h4>
                    <p
                      class="my-auto"
                    >Data kasus terkonfirmasi COVID-19 Nasional adalah data yang telah diumumkan secara resmi oleh Kementrian Kesehatan RI</p>
                  </b-card-text>
                </b-col>
                <b-col md="6" class="text-right my-auto">
                  <br />
                  <b-card-title class="header my-auto">Positif</b-card-title>
                  <b-card-text>
                    <h1 class="my-auto">{{ total.positif | numFor }}</h1>
                  </b-card-text>
                </b-col>
              </b-row>
            </b-container>
          </b-card>
          <b-card-group deck class="mt-4 text-center">
            <b-card class="card-style">
              <b-card-title class="header">Dirawat</b-card-title>
              <b-card-text>
                <h3 class="danger">{{ total.dirawat | numFor }}</h3>
                <p class="danger">({{ percentage(total.dirawat) }})</p>
              </b-card-text>
            </b-card>
            <b-card class="card-style">
              <b-card-title class="header">Sembuh</b-card-title>
              <b-card-text>
                <h3 class="safe">{{ total.sembuh | numFor }}</h3>
                <p class="safe">({{ percentage(total.sembuh) }})</p>
              </b-card-text>
            </b-card>
            <b-card class="card-style">
              <b-card-title class="header">Meninggal</b-card-title>
              <b-card-text>
                <h3 class="danger">{{ total.meninggal | numFor }}</h3>
                <p class="danger">({{ percentage(total.meninggal) }})</p>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-container>
    </section>

    <section class="penambahan">
      <b-container>
        <b-card class="pt-3 pb-1 statistic">
          <b-card-title>
            <h2 class="pb-2 text-center">Penambahan Korban COVID-19</h2>
          </b-card-title>
          <b-card-text>
            <p class="text-center danger">Positif : +{{ penambahan.positif | numFor }} orang</p>
            <div class="table-style text-center">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Kategori</th>
                    <th scope="col">Total</th>
                    <th scope="col">%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="safe">
                    <td>Sembuh</td>
                    <td>+{{ penambahan.sembuh | numFor }}</td>
                    <td>{{ percentagePenambahan(penambahan.sembuh) }}</td>
                  </tr>
                  <tr class="danger">
                    <td>Dirawat</td>
                    <td>+{{ penambahan.dirawat | numFor }}</td>
                    <td>{{ percentagePenambahan(penambahan.dirawat) }}</td>
                  </tr>
                  <tr class="danger">
                    <td>Meninggal</td>
                    <td>+{{ penambahan.meninggal | numFor }}</td>
                    <td>{{ percentagePenambahan(penambahan.meninggal) }}</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-card>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataIndonesia",
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

          console.log("total :", this.total);
          console.log("penambahan :", this.penambahan);
        })
        .catch(e => {
          console.log(e);
        });
    },
    percentage(value) {
      if (!value) {
        return "0";
      }
      let jml = Number(this.total.positif);
      let percent = ((Number(value) / jml) * 100).toFixed(2);

      return percent + " %";
    },
    percentagePenambahan(value) {
      if (!value) {
        return "0";
      }
      let jml = Number(this.penambahan.positif);
      let percent = ((Number(value) / jml) * 100).toFixed(2);

      return percent + " %";
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
#ind {
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
.intro h1,
.update h2,
.penambahan h2 {
  font-weight: 700;
}
.intro p {
  font-weight: 500;
}
.card-head {
  border: none;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
.card-style {
  border: none;
  border-radius: 20px;
}
.header {
  font-size: 14pt;
  font-weight: 600;
}
.desc p {
  font-size: 11pt;
}
h1 {
  font-weight: 600;
}
.danger,
.safe {
  font-weight: 700;
}
.danger {
  color: rgb(252, 82, 82);
}
.safe {
  color: rgb(29, 216, 29);
}
.table-style {
  padding: 3% 2%;
  margin: 0 8%;
}
.statistic {
  border-radius: 20px;
  border: none;
}
h5 {
  color: rgb(252, 82, 82);
  font-weight: 600;
}
th {
  font-size: 12pt;
  font-weight: 600;
}
/* td {
  font-size: 11pt;
} */
</style>