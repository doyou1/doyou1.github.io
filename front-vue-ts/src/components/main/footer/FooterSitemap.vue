<script setup lang="ts">
import { ref } from "vue";
import type { FooterColStructureType } from "@/composables/use-footer-string";
import ArrowLink from "@/assets/footer/arrow-link.svg"

const footerMenuList = ref<FooterColStructureType>([
  {
    footerTitle: "문서",
    footerDetail: [
      {
        detailName: "가이드",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "튜토리얼",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: false,
      },
      {
        detailName: "예제",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "시작하기",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/quick-start.html",
        newPage: false,
      },
      {
        detailName: "Vue 2 문서",
        detailUrl: "https://ko.vuejs.org/",
        newPage: true,
      },
      {
        detailName: "Vue 2에서 마이그레이션",
        detailUrl: "https://v3-migration.vuejs.org",
        newPage: true,
      },
    ],
  },
  //   정은우: 이 아래 부터는 url 연결 할 예정
  {
    footerTitle: "정보",
    footerDetail: [
      {
        detailName: "자주 묻는 질문",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "팀",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: false,
      },
      {
        detailName: "출시",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "커뮤니티 가이드",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "행동 강령",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "다큐멘터리",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: true,
      },
    ],
  },
  {
    footerTitle: "리소스",
    footerDetail: [
      {
        detailName: "파트너",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "테마",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "일자리",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "T-셔츠샵",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
    ],
  },
  {
    footerTitle: "공식 라이브러리",
    footerDetail: [
      {
        detailName: "Vue Router",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: true,
      },
      {
        detailName: "Pinia",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "도구가이드",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
    ],
  },

  {
    footerTitle: "비디오 코스",
    footerDetail: [
      {
        detailName: "Vue Mastery",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: true,
      },
      {
        detailName: "Vue School",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
    ],
  },
  {
    footerTitle: "도움",
    footerDetail: [
      {
        detailName: "Discord 채팅",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: true,
      },
      {
        detailName: "GitHub 토론",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "DEV Community",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: true,
      },
    ],
  },

  {
    footerTitle: "뉴스",
    footerDetail: [
      {
        detailName: "블로그",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "트위터",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "이벤트",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "뉴스레터",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: false,
      },
    ],
  },
]);
</script>
<template>
  <section id="footer-wrap">
    <div class="footer-container">
      <div
        v-for="(footerMenu, index) in footerMenuList"
        :key="index"
        class="footer-col"
      >
        <h4>{{ footerMenu.footerTitle }}</h4>
        <ul>
          <!-- footerMenu의 각 footerDetail에 대해 반복 -->
          <li
            v-for="(detail, detailIndex) in footerMenu.footerDetail"
            :key="detailIndex"
          >
            <a class="footer-col-link" :href="detail.detailUrl">{{
              detail.detailName
            }}
            <ArrowLink v-if="detail.newPage" class="footer-col-arrowlink"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#footer-wrap .footer-col-arrowlink{
  display: inline-block;
    margin-top: -2px;
    margin-left: 4px;
    width: 11px;
    height: 11px;
    fill: var(--footer-fill-svg);
    transition: fill .25s;
}
#footer-wrap .footer-col-link {
  font-size: 0.9rem;
  color: var( --footer-text-color);
}
#footer-wrap h4 {
  color: var(--footer-text-h4);
  margin-bottom: 0.25rem;
  font-weight: 500;
}
.footer-col {
  margin-bottom: 2rem;
  break-inside: avoid;
}
#footer-wrap .footer-container {
  max-width: 900px;
  margin: 0 auto;
  columns: 1;
  padding: 24px 32px;
}
#footer-wrap {
  background-color: var(--footer-fill-backgroundcolor);
  padding: 42px 32px;
}

@media (min-width: 768px) {
  #footer-wrap .footer-container {
    columns: 2;
  }
}
@media (min-width: 1024px) {
  #footer-wrap .footer-container {
    columns: 3;
  }
}
</style>
