<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light" sticky>
      <b-container>
        <b-navbar-brand to="/">CovInf</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" class="ml-2">
              Beranda
            </b-nav-item>
            <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                Data
              </template>
              <b-dropdown-item to="/data-indonesia">Data Indonesia</b-dropdown-item>
              <b-dropdown-item to="/data-provinsi">Data Provinsi</b-dropdown-item>
            </b-nav-item-dropdown>
             <b-nav-item-dropdown left class="ml-2">
              <template #button-content>
                Layanan
              </template>
              <b-dropdown-item href="#">Pencegahan</b-dropdown-item>
              <b-dropdown-item href="#">FAQ</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about-us" class="ml-2">
              About
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
b-link {
  color: white
}
.b-link:hover {
  color: white;
  text-decoration: none;
}
</style>