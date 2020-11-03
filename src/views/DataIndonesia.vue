<template>
  <div id="ind">
    <b-container>
      <section class="update text-center">
        <h1>UPDATE TERBARU COVID-19 DI INDONESIA</h1>
        <p>Terakhir di Update pada tanggal: {{ penambahan.tanggal }}</p>
        <br />
        <div>
          <b-card-group deck>
            <b-card title="Positif">
              <b-card-text>
                <h1>{{ total.positif }}</h1>
              </b-card-text>
            </b-card>

            <b-card title="Dirawat">
              <b-card-text>
                <h1>{{ total.dirawat }}</h1>
              </b-card-text>
            </b-card>
            <b-card title="Sembuh">
              <b-card-text>
                <h1>{{ total.sembuh }}</h1>
              </b-card-text>
            </b-card>
            <b-card title="Meninggal">
              <b-card-text>
                <h1>{{ total.meninggal }}</h1>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </section>
    </b-container>
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
#ind {
  margin-top: 15px;
}
</style>