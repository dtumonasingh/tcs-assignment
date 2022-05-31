<template>
  <div class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__item" to="/"> {{ airlines }} </router-link>
      <router-link class="navbar__item" to="/passengers"> {{ passengers }} </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airlines: 'Airlines',
      passengers: 'Passengers',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/_navbar.scss';
</style>
