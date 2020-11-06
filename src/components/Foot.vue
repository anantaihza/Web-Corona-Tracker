<template>
  <div class="footers pt-4 pb-5">
    <b-container>
      <h4>CovInf</h4>
      <p>Copyright @kontolan</p>
      <b-row class="pt-4">
        <b-col cols="4" sm="2">
          <h5>Social Media</h5>
          <a class="link" href>Instagram</a>
          <br />
          <a class="link" href>Facebook</a>
          <br />
          <a class="link" href>Twitter</a>
        </b-col>
        <b-col cols="4" sm="2">
          <h5>Page</h5>
          <router-link class="link" to="/">Beranda</router-link>
          <br />
          <router-link class="link" to="/data-indonesia">Data</router-link>
          <br />
          <router-link class="link" to="/">Pencegahan</router-link>
        </b-col>
      </b-row>
      <!-- <hr class="divider" />
      <p class="text-center pt-1">Copyright @kontolan</p> -->
    </b-container>
  </div>
</template>

<script>
export default {
  name: "foot"  
};
</script>

<style scoped>
.footers {
  border-top: 0.2px solid #dfdfdf;
}
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: rgb(61, 61, 61);
}
</style>