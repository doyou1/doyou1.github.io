<!-- 231209 정은우: 추후 import.meta.glob을 이용해 동적으로 import할 수 있게 수정할 예정 -->
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
  <section id="sponsor__container">
    <div>
      <h2 class="sponsor__h2">Platinum</h2>
      <div class="sponsor__cards__gold">
        <a
          v-for="(image, imageIndex) in platinumImage"
          :key="imageIndex"
          class="sponsor__card"
        >
          <img :src="image" alt="Sponsor Image" class="sponsor__card__image" />
        </a>
      </div>
    </div>
    <div>
      <h2 class="sponsor__h2">Gold</h2>
      <div class="sponsor__cards__gold">
        <a
          v-for="(image, imageIndex) in goldImage"
          :key="imageIndex"
          class="sponsor__card"
        >
          <img :src="image" alt="Sponsor Image" class="sponsor__card__image" />
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
*,
:before,
:after {
  box-sizing: border-box;
}

.sponsor {
  &__h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1em;
  }
  &__cards__gold {
    margin-bottom: 3rem;
    --max-width: 240px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
    column-gap: 4px;
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
      max-height: calc(var(--max-width) / 2 - 20px px);
    }
  }
}
#sponsor__container {
  max-width: 900px;
  margin: 0 auto;
  padding: 42px 32px;
  &__h2 {
  }
}
#sponsor__container {
  --sponsor-fill-card: #f9f9f9;
}
</style>
