<script setup lang="ts">
import { ref } from "vue";
import type { FooterBottomText } from "@/composables/use-footer-string";

const footerBottom = ref<FooterBottomText>({
  bottomLink: [
    "Released under the",
    { text: "MIT License.", url: "https://opensource.org/license/mit/" },
  ],
  bottomText: "Copyright © 2014-2023 Evan You",
});
</script>

<template>
  <section id="footer-bottom">
    <p class="footer-bottom-release">
      {{ footerBottom.bottomLink[0] }}
      <a :href="footerBottom.bottomLink[1].url">{{
        footerBottom.bottomLink[1].text
      }}</a>
    </p>
    <p>{{ footerBottom.bottomText }}</p>
  </section>
</template>

<style lang="scss">
.footer-bottom-release a {
  color: var(--footer-text-h4);
}
#footer-bottom p {
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--footer-text-color);
  transition: color 0.25s;
}
#footer-bottom {
  border-top: 1px var(--footer-border-color);
  padding: 23px 24px 24px;
  transition:
    border-top 0.5s,
    background-color 0.5s;
  text-align: center;
  background-color: var(--footer-fill-backgroundcolor-2);
}
</style>
