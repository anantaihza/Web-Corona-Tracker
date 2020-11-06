<template>
  <div id="app">
    <navbar />
    <router-view />
    <foot />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Foot
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif; 
}

</style>
