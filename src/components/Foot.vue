<template>
  <div class="footers pt-4 pb-5">
    <b-container>
      <h3>CovInf</h3>
      <p>Copyright @kontolan</p>
      <b-row class="pt-3">
        <b-col cols="4" sm="2">
          <p class="my-auto pb-2 sub-head">SHARING</p>
          <a class="link" href>Instagram</a>
          <br />
          <a class="link" href>Facebook</a>
          <br />
          <a class="link" href>Twitter</a>
        </b-col>
        <b-col cols="4" sm="2">
          <p class="my-auto pb-2 sub-head">PAGE</p>
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
/* .footers {
  border-top: 0.2px solid #dfdfdf;
} */
.link {
  text-decoration: none;
  color: black;
  font-size: 11pt;
}
.link:hover {
  color: rgb(61, 61, 61);
}
h3 {
  font-weight: 800;
}
p {
  font-size: 11pt;
}
.sub-head {
  color: #2f80ed;
  font-weight: 600;
}
</style>