<template>
  <div id="prov">
    <h1>Data Provinsi</h1>  
    <div v-for="prov in dataProv" :key="prov.provinsi">
      <p>{{ prov.provinsi }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataProvinsi",
  data() {
    return {
      dataProv: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData() {
      const options = {
        url: "http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/more",
        method: "get"
      };
      axios(options)
        .then(response => {
          let dataprov = []
          let prov = response.data
          prov.map(data => {
            dataprov.push(data)
          })
          this.dataProv = dataprov
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
}
</script>

<style scoped>
  #prov {
    margin-top: 15px;
  }
</style>