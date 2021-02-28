<template>
  <div class="footers pt-4 pb-5">
    <b-container>
      <h3>CovInf</h3>
      <p>© 2020 Copyright</p>
      
      <b-container>
        <b-row>
        <router-link class="link" to="/">Beranda</router-link>
        <router-link class="link" to="/data-indonesia">Data Indonesia</router-link>
        <router-link class="link" to="/data-provinsi">Data Provinsi</router-link>
        <router-link class="link" to="/protokol">Protokol Kesehatan</router-link>
        <router-link class="link" to="/faq">FAQ</router-link>
      </b-row>
      </b-container>
      <hr>
      <b-row class="pt-3">
        <b-col cols="4" sm="2">
          <p class="my-auto pb-2 sub-head">POWERED BY</p>
          <b-container>
            <b-row>
              <img src="@/assets/footer/telkom.png" alt width="20%" />
            </b-row>
          </b-container>
        </b-col>
      </b-row>
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
  padding-top: 1rem;
  margin-right: 2rem;
  text-decoration: none;
  color: #2f80ed;
  font-size: 11pt;
}
.link:hover {
  color: rgb(61, 61, 61);
}
h3 {
  font-weight: 800;
  color: #2f80ed;
}
p {
  font-size: 11pt;
}
.sub-head {
  color: #2f80ed;
  font-weight: 600;
}
</style>