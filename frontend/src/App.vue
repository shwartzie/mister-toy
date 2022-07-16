

<template>
  <section class="main-layout">
    <app-header />
    <router-view />
  </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router"
import appHeader from "./components/app-header.vue"
export default {
  name: "app",
  created() {
    this.$store.dispatch({ type: "loadToys" })
  },
  methods: {

  },
  components: {
    appHeader,
  },
}
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
