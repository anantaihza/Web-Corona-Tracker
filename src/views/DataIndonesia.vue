<template>
  <div id="ind">
    <h1>Data Indonesia</h1>  
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DataIndonesia",
  data() {
    return {
      dataInd: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData() {
      const options = {
        url: "https://apicovid19indonesia-v2.vercel.app/api/indonesia/more",
        method: "get"
      };
      axios(options)
        .then(response => {
          // this.dataInd = response.data.data;
          console.log(response.data)
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
}
</script>

<style scoped>
  #ind {
    margin-top: 15px;
  }
</style>