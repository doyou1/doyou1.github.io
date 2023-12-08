<!-- 231209 정은우: 추후 import.meta.glob을 이용해 동적으로 import할 수 있게 수정할 예정 -->
<script setup lang="ts">
import { ref } from "vue";
import type {
  SponsorItemListType,
  SponsorUrlType,
} from "@/composables/use-items";
const sponsorItemList = ref<SponsorItemListType>([
  { sponsorGrade: "Platinum", sponsorDetail: [] },
  { sponsorGrade: "Gold", sponsorDetail: [] },
]);

const platinumSponsorUrl = ref<SponsorUrlType>([
  "https://bit.dev",
  "https://www.vuemastery.com/",
  "https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",
  "https://vehikl.com/",
  "https://passionatepeople.io/",
  "https://www.storyblok.com/",
  "https://ionicframework.com/vue?utm_source=partner&utm_medium=referral&utm_campaign=vuesponsorship&utm_content=vuedocs",
  "https://skilled.yashio-corp.com/",
  "https://opencollective.com/2021-frameworks-fund",
  "https://www.herodevs.com/support/nes-vue",
]);
const goldSponsorUrl = ref<SponsorUrlType>([
  "https://bit.dev",
  "https://www.vuemastery.com/",
  "https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",
  "https://vehikl.com/",
  "https://passionatepeople.io/",
  "https://www.storyblok.com/",
  "https://ionicframework.com/vue?utm_source=partner&utm_medium=referral&utm_campaign=vuesponsorship&utm_content=vuedocs",
  "https://skilled.yashio-corp.com/",
  "https://opencollective.com/2021-frameworks-fund",
  "https://www.herodevs.com/support/nes-vue",
]);

const platinumImportImages = import.meta.glob(
  "./assets/sponsors/platinum/*.{png,jpeg,jpg,svg,avif}",
);
const goldImportImages = import.meta.glob(
  "./assets/sponsors/gold/*.{png,jpeg,jpg,svg,avif}",
);

const loadImages = async () => {
  const platinumImagePromises = Object.values(platinumImportImages).map((importFunc) =>
    importFunc().then((module: { default: string }) => module.default)
  );
  const goldImagePromises = Object.values(goldImportImages).map((importFunc) =>
    importFunc().then((module: { default: string }) => module.default)
  );

  const platinumImageUrls = await Promise.all(platinumImagePromises);
  const goldImageUrls = await Promise.all(goldImagePromises);

  sponsorItemList.value.forEach((sponsorItem) => {
    if (sponsorItem.sponsorGrade === "Platinum") {
      sponsorItem.sponsorDetail = platinumImageUrls.map((imgUrl, index) => ({
        imgUrl,
        sponsorUrl: platinumSponsorUrl.value[index],
      }));
    } else if (sponsorItem.sponsorGrade === "Gold") {
      sponsorItem.sponsorDetail = goldImageUrls.map((imgUrl, index) => ({
        imgUrl,
        sponsorUrl: goldSponsorUrl.value[index],
      }));
    }
  });
};

loadImages();
console.log(sponsorItemList.value)
// sponsorItemList.value.forEach((sponsorItem) => {
//     sponsorItem.sponsorGrade === "Platinum" ?
//     for (let i = 0; i < imgUrls.length; i++) {
//     sponsorItem.sponsorDetail.push({
//       imgUrl: `/assets/sponsors/platinum/*${[i]}.+(png|jpeg|jpg|svg|avif)`,
//       sponsorUrl: sponsorUrls[i],
//     });
//      : goldImages;
//   // imgUrls와 sponsorUrls 배열을 사용하여 sponsorDetail 배열에 값 삽입
//   for (let i = 0; i < imgUrls.length; i++) {
//     sponsorItem.sponsorDetail.push({
//       imgUrl: imgUrls[i],
//       sponsorUrl: sponsorUrls[i],
//     });
//   }
// }});
</script>

<template>
  <section id="sponsor-container">
    <div v-for="(title, titleIndex) in sponsorItemList" :key="titleIndex">
      <h2>{{ title.sponsorGrade }}</h2>
      <div class="sponsor-cards">
        <a
          class="sponsor-card"
          v-for="(card, cardIndex) in title.sponsorDetail"
          :key="cardIndex"
        >
          <img :src="card.imgUrl" />
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
.sponsor-card {
  margin: 2px 0;
  background-color: var(--sponsor-fill-card);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 2px;
  transition: background-color 0.2s ease;
  height: calc(var(--max-width) / 2 - 6px);
}
#sponsor-container .sponsor-cards {
  margin-bottom: 3rem;
  --max-width: 240px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--max-width), 1fr));
  column-gap: 4px;
}

#sponsor-container h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}
#sponsor-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 42px 32px;
}
#sponsor-container {
  --sponsor-fill-card: #f9f9f9;
}
</style>
