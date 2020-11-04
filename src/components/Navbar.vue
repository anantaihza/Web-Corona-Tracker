<template>
  <div>
    <b-navbar toggleable="md" variant="faded" type="light" sticky class="navbar">
      <b-container>
        <b-navbar-brand class="brand" to="/">CovInf</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="ml-2">
              <span class="navlink">Beranda</span>
            </b-nav-item>
            <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                <span class="navlink">Data</span>
              </template>
              <b-dropdown-item to="/data-indonesia">
                <span class="droplink">Data Indonesia</span>
              </b-dropdown-item>
              <b-dropdown-item to="/data-provinsi">
                <span class="droplink">Data Provinsi</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                <span class="navlink">Layanan</span>
              </template>
              <b-dropdown-item href="#">
                <span class="droplink">Pencegahan</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <span class="droplink">FAQ</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about" class="ml-2">
              <span class="navlink">Tentang</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.brand {
  font-size: 16pt;
  font-weight: 900;
}
.droplink {
  font-size: 11pt;
}
.navbar {
  /* background: #56ccf2;
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  );
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  );  */
  /* box-shadow: 0 1px 6px rgb(78, 78, 78); */
}
@media (min-width: 768px) {
  .navlink {
    color: black;
    font-size: 11pt;
  }
  .navlink:hover {
    /* color: rgb(184, 184, 184); */
    padding-bottom: 8px;
    /* display: block; */
    border-bottom: 3px solid #2f80ed;
  }
  
}
</style>