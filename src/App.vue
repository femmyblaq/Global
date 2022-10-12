<template>
  <div id="app">
    <HeaderVue
      v-if="!['Dashboard', 'Login', 'Register'].includes($route.name)"
    />
    <!-- <Home></Home> -->

    <!-- <loader
      ref="preloader"
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="2"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader> -->
    <router-view />
    <FooterVue
      v-if="!['Dashboard', 'Login', 'Register'].includes($route.name)"
    />
  </div>
</template>
<script>
// import Home from "./views/Home.vue";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
export default {
  components: {
    // Home,
    FooterVue,
    HeaderVue,
  },
  created() {
    // window.addEventListener("load", this.preLoader());
  },
  methods: {
    // preLoader() {
    //   console.log("I'm working down here");
    //   this.$ref.classList.add()
    // },
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Open sans", "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
