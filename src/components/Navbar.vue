<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">CovInf</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/" >
              Home
            </b-nav-item>
            <b-nav-item to="/">
              Pencegahan
            </b-nav-item>
            <b-nav-item-dropdown right>
              <template #button-content>
                <em>Kasus</em>
              </template>
              <b-dropdown-item href="#">Data Kasus Indonesia</b-dropdown-item>
              <b-dropdown-item href="#">Data Kasus Provinsi</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about-us" class="ml-2">
              About Us
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