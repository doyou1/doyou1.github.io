<script setup lang="ts">
import SponsorAndValueView from "./SponsorAndValueView.vue";
</script>

<template>
  <div id="sponsor-whole">
    <SponsorAndValueView />
  </div>
</template>
<style lang="scss">
$--sponsor-fill-dark-3: #1a1a1a;
#sponsor-whole {
  transition: background-color 0.5s;
}
.dark {
  #sponsor-whole {
    background-color: $--sponsor-fill-dark-3;
    transition: background-color 0.5s;
  }
}
</style>
