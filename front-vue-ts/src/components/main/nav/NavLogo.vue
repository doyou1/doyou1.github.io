<script setup lang="ts">
import HomeLogo from "@/assets/nav/home-logo.svg";
</script>

<template>
  <a href="#" class="home">
    <HomeLogo class="home__logo" />
    <span class="home__text">Vue.js</span>
  </a>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--nav-height);
  transition: opacity 0.25s;

  &__logo {
    position: relative;
  }

  &__text {
    padding-left: 8px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
