<!-- 231214 : 정은우 -->
<!-- script에 위치한 함수들은 추후 composable로 옮길 예정 -->
<script setup lang="ts">
import { ref } from "vue";
import type { SponsorImage, ImageModules } from "@/composables/use-items";

const goldImportImages = import.meta.glob(
  "../../../assets/sponsorList/gold/*.{png,jpeg,jpg,svg,avif}",
  { eager: true },
) as ImageModules;
const platinumImportImages = import.meta.glob(
  "../../../assets/sponsorList/platinum/*.{png,jpeg,jpg,svg,avif}",
  { eager: true },
) as ImageModules;

const goldImage = ref<SponsorImage>([]);
const platinumImage = ref<SponsorImage>([]);

for (const img in goldImportImages) {
  goldImage.value.push(goldImportImages[img].default);
}
for (const img in platinumImportImages) {
  platinumImage.value.push(platinumImportImages[img].default);
}
console.log("goldImage : ", goldImage.value);
</script>

<template>
  <section class="sponsor__container">
    <h2 class="sponsor__h2">Platinum Sponsor</h2>
    <div class="sponsor__cards__platinum">
      <a
        v-for="(image, imageIndex) in platinumImage"
        :key="imageIndex"
        class="sponsor__card"
      >
        <img :src="image" alt="Sponsor Image" class="sponsor__card__image" />
      </a>
    </div>
    <h2 class="sponsor__h2">Gold Sponsor</h2>
    <div class="sponsor__cards__gold">
      <a
        v-for="(image, imageIndex) in goldImage"
        :key="imageIndex"
        class="sponsor__card"
      >
        <img :src="image" alt="Sponsor Image" class="sponsor__card__image" />
      </a>
    </div>
  </section>
</template>
<style lang="scss">
@import "@/styles/mixin.scss";
*,
:before,
:after {
  box-sizing: border-box;
}

.sponsor {
  &__container {
    --sponsor-fill-card: #f9f9f9;
    max-width: 900px;
    margin: 0 auto;
    padding: 42px 32px;
  }
  &__h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  &__cards {
    &__platinum {
      --max-width: 240px;
      @include large() {
        --max-width: 180px;
      }
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
      column-gap: 4px;
    }
    &__gold {
      --max-width: 180px;
      @include large() {
        --max-width: 140px;
      }
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
      column-gap: 4px;
    }
  }
  &__card {
    margin: 2px 0;
    background-color: var(--sponsor-fill-card);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    height: calc(var(--max-width) / 2 - 6px);
    &__image {
      max-width: calc(var(--max-width) - 30px);
      max-height: calc(var(--max-width) / 2 - 20px);
    }
  }
}
</style>
