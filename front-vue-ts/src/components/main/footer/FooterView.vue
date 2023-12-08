<script setup lang="ts">
import FooterSitemap from "./FooterSitemap.vue";
import FooterBottom from "./FooterBottom.vue"

</script>

<template>
  <div>
    <FooterSitemap/>
    <FooterBottom/>
  </div>
</template>
<style scoped lang="scss">
$testFillBackgroundColor: #e0e0e0;

*,
::after,
::before {
  box-sizing: border-box;
  background-color: var(--footer-fill-backgroundcolor);
}
#footer-wrap, #footer-bottom {
  --footer-fill-backgroundcolor: #f9f9f9;
  --footer-text-h4: #213547;
  --footer-text-color: rgba(60, 60, 60, 0.7);
  --footer-border-color: #f9f9f9;
  --footer-fill-svg: rgba(60, 60, 60, .33);
}
</style>
