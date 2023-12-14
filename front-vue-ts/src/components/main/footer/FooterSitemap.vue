<script setup lang="ts">
import { ref } from "vue";
import type { FooterColStructureType } from "@/composables/use-footer-string";
import ArrowLink from "@/assets/footer/arrow-link.svg";

const footerMenuList = ref<FooterColStructureType>([
  {
    footerTitle: "Docs",
    footerDetail: [
      {
        detailName: "Guide",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "Tutorial",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: false,
      },
      {
        detailName: "Examples",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "Quick Start",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/quick-start.html",
        newPage: false,
      },
      {
        detailName: "Glossary",
        detailUrl: "https://ko.vuejs.org/",
        newPage: true,
      },
      {
        detailName: "Vue 2 Docs",
        detailUrl: "https://ko.vuejs.org/",
        newPage: true,
      },
      {
        detailName: "Migration from Vue 2",
        detailUrl: "https://v3-migration.vuejs.org",
        newPage: true,
      },
    ],
  },
  //   정은우: 이 아래 부터는 url 연결 할 예정
  {
    footerTitle: "About",
    footerDetail: [
      {
        detailName: "FAQ",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "Team",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: false,
      },
      {
        detailName: "Releases",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "Community Guide",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "Code of Conduct",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
      {
        detailName: "The Documentary",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: true,
      },
    ],
  },
  {
    footerTitle: "Resources",
    footerDetail: [
      {
        detailName: "Partners",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "Themes",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: false,
      },
      {
        detailName: "UI Components",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "Certification",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "Jobs",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "T-Shirt Shop",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
    ],
  },
  {
    footerTitle: "Official Libraries",
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
        detailName: "Tooling Guide",
        detailUrl: "https://v3-docs.vuejs-korea.org/examples/#hello-world",
        newPage: false,
      },
    ],
  },

  {
    footerTitle: "Video Courses",
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
    footerTitle: "Help",
    footerDetail: [
      {
        detailName: "Discord Chat",
        detailUrl: "https://v3-docs.vuejs-korea.org/guide/introduction.html",
        newPage: true,
      },
      {
        detailName: "GitHub Discussions",
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
    footerTitle: "News",
    footerDetail: [
      {
        detailName: "Blog",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "Twitter",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "Events",
        detailUrl: "https://v3-docs.vuejs-korea.org/tutorial/#step-1",
        newPage: true,
      },
      {
        detailName: "Newsletters",
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
            <a class="footer-col-link" :href="detail.detailUrl"
              >{{ detail.detailName }}
              <ArrowLink v-if="detail.newPage" class="footer-col-arrowlink" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#footer-wrap .footer-col-arrowlink {
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: var(--footer-fill-svg);
  transition: fill 0.25s;
}
#footer-wrap .footer-col-link {
  font-size: 0.9rem;
  color: var(--footer-text-color);
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
