<template>
  <div id="about">
    <section class="intro">
      <b-container class="py-5">
        <p class="pt-2">Beranda > Tentang</p>
        <h1 class="py-4">Tentang Website</h1>
        <p class="pt-2 pb-2">Website Covinf</p>
      </b-container>
    </section>   
  </div>
</template>

<script>
export default {
  name: "About",

}
</script>

<style scoped>
#about {
  background: rgb(235, 246, 250);
  padding-bottom: 4rem;
}
.intro {
  padding: 5rem 0 1rem;
  background: #56ccf2;
  background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
  background: linear-gradient(to right, #2f80ed, #56ccf2);
  color: white;
}
.intro h1 {
  font-weight: 700;
}
.intro p {
  font-weight: 500;
}
</style>