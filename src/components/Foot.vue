<template>
  <div class="footers pt-4 pb-1">
    <b-container>
      <b-row>
        <b-col md="6">
          <h4>CovInf</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dignissimos porro reprehenderit esse suscipit. Quis, at, odio ad dolores</p>
        </b-col>
        <b-col md="3">
          <h4>Get Started</h4>
          <router-link class="link" to="/">Beranda</router-link>
          <br />
          <router-link class="link" to="/data-indonesia">Data</router-link>
          <br />
          <router-link class="link" to="/">Pencegahan</router-link>
        </b-col>
        <b-col md="3">
          <h4>Social Media</h4>
          <a class="link" href>Instagram</a>
          <br />
          <a class="link" href>Facebook</a>
          <br />
          <a class="link" href>Twitter</a>
        </b-col>
      </b-row>
      <hr class="divider" />
      <p class="text-center pt-1">Copyright @kontolan</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "foot"  
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: rgb(61, 61, 61);
}
</style>