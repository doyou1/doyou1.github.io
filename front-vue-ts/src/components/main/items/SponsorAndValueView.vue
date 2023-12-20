<!-- 231214 : 정은우 -->
<!-- script에 위치한 함수들은 추후 composable로 옮길 예정 -->
<script setup lang="ts">
import { ref } from "vue";
import type { SponsorItemListType } from "@/composables/use-items";

const imageList = ref<SponsorItemListType>([
  {
    sponsorGrade: "Platinum",
    sponsorDetail: [
      {
        sponsorUrl: "https://bit.dev",
        imgUrl: "https://sponsors.vuejs.org/images/bit.svg?v2",
      },
      {
        sponsorUrl: "https://www.vuemastery.com/",
        imgUrl: "https://sponsors.vuejs.org/images/vuemastery.png",
      },
      {
        sponsorUrl:
          "https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",
        imgUrl: "https://sponsors.vuejs.org/images/vueschool.png",
      },
      {
        sponsorUrl: "https://vehikl.com/",
        imgUrl: "https://sponsors.vuejs.org/images/vehikl.png",
      },
      {
        sponsorUrl: "https://passionatepeople.io/",
        imgUrl: "https://sponsors.vuejs.org/images/passionate_people.png",
      },
      {
        sponsorUrl: "https://www.storyblok.com",
        imgUrl: "https://sponsors.vuejs.org/images/storyblok.png",
      },
      {
        sponsorUrl:
          "https://ionicframework.com/vue?utm_source=partner&utm_medium=referral&utm_campaign=vuesponsorship&utm_content=vuedocs",
        imgUrl: "https://sponsors.vuejs.org/images/ionic.png?v2",
      },
      {
        sponsorUrl: "https://skilled.yashio-corp.com",
        imgUrl: "https://sponsors.vuejs.org/images/skilled.svg",
      },
      {
        sponsorUrl: "https://opencollective.com/2021-frameworks-fund",
        imgUrl: "https://sponsors.vuejs.org/images/chrome_frameworks_fund.png",
      },
      {
        sponsorUrl: "https://www.herodevs.com/support/vue",
        imgUrl: "https://sponsors.vuejs.org/images/herodevs.png",
      },
      {
        sponsorUrl: "https://vuejs.org/sponsor/",
        imgUrl: "Become a Sponsor",
      },
    ],
  },
  {
    sponsorGrade: "Gold",
    sponsorDetail: [
      {
        sponsorUrl: "https://laravel.com",
        imgUrl: "https://sponsors.vuejs.org/images/laravel.png",
      },
      {
        sponsorUrl: "https://tidelift.com/subscription/npm/vue",
        imgUrl: "https://sponsors.vuejs.org/images/tidelift.png",
      },
      {
        sponsorUrl: "https://intygrate.com/",
        imgUrl: "https://sponsors.vuejs.org/images/intygrate.png",
      },
      {
        sponsorUrl: "https://www.y8.com/",
        imgUrl: "https://sponsors.vuejs.org/images/y8.png",
      },
      {
        sponsorUrl: "https://js.devexpress.com/",
        imgUrl: "https://sponsors.vuejs.org/images/devexpress.png",
      },
      {
        sponsorUrl: "https://fastcoding.jp/javascript/ ",
        imgUrl: "https://sponsors.vuejs.org/images/fastcoding_inc.svg",
      },
      {
        sponsorUrl: "https://www.lycorp.co.jp/en/",
        imgUrl: "https://sponsors.vuejs.org/images/ly_corporation.png?v2",
      },
      {
        sponsorUrl: "https://www.fenetre.nl/",
        imgUrl:
          "https://sponsors.vuejs.org/images/fen_tre_online_solutions.svg",
      },
      {
        sponsorUrl: "https://antdv.com",
        imgUrl: "https://sponsors.vuejs.org/images/ant_design_vue.png",
      },
      {
        sponsorUrl: "https://crisp.chat/en/",
        imgUrl: "https://sponsors.vuejs.org/images/crisp.png",
      },
      {
        sponsorUrl:
          "https://localazy.com/blog/how-to-localize-vuejs-app-with-vue-i18n-and-localazy?utm_source=vuejs&utm_medium=banner&utm_campaign=sponsorships_vuejs&utm_content=logo",
        imgUrl: "https://sponsors.vuejs.org/images/localazy.svg",
      },
      {
        sponsorUrl: "https://casinoburst.com/casino-utan-licens/",
        imgUrl: "https://sponsors.vuejs.org/images/casinoburst_com.png",
      },
      {
        sponsorUrl: "https://www.enkrypt.com",
        imgUrl:
          "https://sponsors.vuejs.org/images/enkrypt__ethereum_and_polkadot_web3_wallet.svg",
      },
      {
        sponsorUrl: "https://www.uudetkasinot.com",
        imgUrl: "https://sponsors.vuejs.org/images/uudetkasinot_com.png",
      },
      {
        sponsorUrl: "https://usefathom.com/",
        imgUrl: "https://sponsors.vuejs.org/images/fathom_analytics.svg",
      },
      {
        sponsorUrl: "https://goread.io/buy-instagram-followers",
        imgUrl: "https://sponsors.vuejs.org/images/goread_io.png",
      },
      {
        sponsorUrl:
          "https://sentry.io/for/vue?utm_source=vuejs.org&utm_medium=paid-community",
        imgUrl: "https://sponsors.vuejs.org/images/sentry.png",
      },
      {
        sponsorUrl: "https://poprey.com/",
        imgUrl: "https://sponsors.vuejs.org/images/poprey_com.png",
      },
      {
        sponsorUrl: "https://www.vedonlyontibonukset.com/pitkavetovihjeet",
        imgUrl:
          "https://sponsors.vuejs.org/images/ilmaiset_pitk_vetovihjeet.png",
      },
      {
        sponsorUrl: "https://famoid.com/",
        imgUrl: "https://sponsors.vuejs.org/images/famoid.png",
      },
      {
        sponsorUrl: "https://www.certible.com",
        imgUrl: "https://sponsors.vuejs.org/images/certible.svg",
      },
      {
        sponsorUrl: "https://www.fortunegames.com",
        imgUrl: "https://sponsors.vuejs.org/images/fortune_games.png",
      },
      {
        sponsorUrl: "http://tbdc.com.br/",
        imgUrl: "https://sponsors.vuejs.org/images/tbdc___agro_software.svg",
      },
      {
        sponsorUrl: "https://fineproxy.org/",
        imgUrl: "https://sponsors.vuejs.org/images/fineproxy.svg",
      },
      {
        sponsorUrl:
          "https://rxdb.info/?utm_source=sponsor&utm_medium=opencollective&utm_campaign=opencollective-vuejs",
        imgUrl: "https://sponsors.vuejs.org/images/daniel.png",
      },
      {
        sponsorUrl: "https://surveyjs.io/",
        imgUrl: "https://sponsors.vuejs.org/images/surveyjs.png",
      },
      {
        sponsorUrl: "https://vuejs.org/sponsor/",
        imgUrl: "Become a Sponsor",
      },
    ],
  },
]);
</script>

<template>
  <section class="sponsor__container">
    <h2
      v-for="(sponsor, sponsorIndex) in imageList"
      :key="sponsorIndex"
      class="sponsor__h2"
    >
      {{ sponsor.sponsorGrade }} Sponsors
      <div :class="`sponsor__cards__${sponsor.sponsorGrade.toLowerCase()}`">
        <a
          v-for="(image, imageIndex) in sponsor.sponsorDetail"
          :key="imageIndex"
          class="sponsor__card"
          :href="image.sponsorUrl"
        >
          <span
            v-if="image.sponsorUrl === 'https://vuejs.org/sponsor/'"
            class="sponsor__item"
            >{{ image.imgUrl }}</span
          >

          <img
            v-if="image.sponsorUrl !== 'https://vuejs.org/sponsor/'"
            :src="image.imgUrl"
            alt="Sponsor Image"
            class="sponsor__card__image"
          />
        </a>
      </div>
    </h2>
  </section>
</template>
<style lang="scss">
@import "@/styles/mixin.scss";
*,
:before,
:after {
  box-sizing: border-box;
}
$--sponsor-text-light-3: rgba(60, 60, 60, 0.33);
$--sponsor-fill-card-light: #f9f9f9;
$--sponsor-text-dark-2: rgba(255, 255, 255, 0.87);
$--sponsor-text-dark-3: rgba(235, 235, 235, 0.38);
$--sponsor-fill-card-dark: #242424;
$--sponsor-fill-card-dark-hover: #f1f1f1;
$--sponsor-text-card-dark-hover: #213547;

.sponsor {
  &__container {
    max-width: 900px;
    margin: 0 auto;
    padding: 42px 32px;
  }
  &__item {
    font-size: 11px;
    color: $--sponsor-text-light-3;
    font-weight: 400;
  }
  &__h2 {
    font-size: 20px;
    font-weight: 600;
    // margin-bottom: 1em;
  }
  &__cards {
    &__platinum {
      margin-top: 1rem;
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
      margin-top: 1rem;
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
    background-color: $--sponsor-fill-card-light;
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

// ===============================
//        Dark mode styles
// ===============================

.dark {
  .sponsor {
    &__container {
      max-width: 900px;
      margin: 0 auto;
      padding: 42px 32px;
    }
    &__item {
      font-size: 11px;
      color: $--sponsor-text-dark-3;
      font-weight: 400;
    }
    &__h2 {
      font-size: 20px;
      font-weight: 600;
      // margin-bottom: 1em;
      color: $--sponsor-text-dark-2;
    }
    &__cards {
      &__platinum {
        margin-top: 1rem;
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
        margin-top: 1rem;
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
      background-color: $--sponsor-fill-card-dark;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 2px;
      transition: background-color 0.2s ease;
      height: calc(var(--max-width) / 2 - 6px);
      &:hover {
        span {
          color: $--sponsor-text-card-dark-hover;
        }
        background-color: $--sponsor-fill-card-dark-hover;

        .sponsor__card__image {
          // 직접 클래스를 명시
          filter: none;
          transition: filter 0.2s ease;
        }
      }

      &__image {
        filter: grayscale(1) invert(1);
        max-width: calc(var(--max-width) - 30px);
        max-height: calc(var(--max-width) / 2 - 20px);
        transition: filter 0.2s ease;
      }
    }
  }
}
</style>
