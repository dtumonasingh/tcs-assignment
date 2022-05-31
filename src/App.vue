<template>
  <tcs-navbar></tcs-navbar>
  <router-view></router-view>
  <tcs-footer />
</template>

<script>

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// import the styles 


export default {
  name: "App",
  components: {
    "tcs-footer": Footer,
    "tcs-navbar": Navbar,
  },
};
</script>

<style lang="scss">
@import "@/styles/_common.scss";
</style>
