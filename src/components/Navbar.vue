<template>
  <div>
    <b-navbar toggleable="md" type="dark" style="box-shadow: 0 2px 5px grey;" sticky class="navbar">
      <b-container>
        <b-navbar-brand to="/">CovInf</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="ml-2">
              <span class="navlink">Beranda</span>
            </b-nav-item>
            <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                <span class="navlink">Data</span>
              </template>
              <b-dropdown-item to="/data-indonesia">Data Indonesia</b-dropdown-item>
              <b-dropdown-item to="/data-provinsi">Data Provinsi</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                <span class="navlink">Layanan</span>
              </template>
              <b-dropdown-item href="#">Pencegahan</b-dropdown-item>
              <b-dropdown-item href="#">FAQ</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about-us" class="ml-2">
              <span class="navlink">About</span>
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
.navbar {
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.navlink {
  color: white;
}
.navlink:hover {
  color: rgb(221, 221, 221);
}
</style>