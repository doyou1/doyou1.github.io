<template>
  <nav class="nav-menu">
    <NavMenuGroup :menu-group="menuGroupList.docs" />
    <a class="menu-link-a" href="#">
      {{ menuLinkTitleList.api.title }}
    </a>
    <a class="menu-link-a" href="#">
      {{ menuLinkTitleList.playground.title }}
    </a>
    <NavMenuGroup :menu-group="menuGroupList.ecosystem" />
    <NavMenuGroup :menu-group="menuGroupList.about" />
    <a class="menu-link-a" href="#">
      {{ menuLinkTitleList.sponsor.title }}
    </a>
    <a class="menu-link-a" href="#">
      {{ menuLinkTitleList.partners.title }}
    </a>
  </nav>
  <div>DarkMode</div>
  <div>SocialLink</div>
  <div>Extra Dark/ModeSocialLink</div>
  <div>EntireMenu</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  MenuGroupListType,
  MenuLinkListType,
} from "@/composables/use-nav-menu";
import NavMenuGroup from "@/components/main/nav/NavMenuGroup.vue";

const menuGroupList = ref<MenuGroupListType>({
  docs: {
    title: "Docs",
    menu: [
      {
        name: "Guide",
        type: "default",
      },
      {
        name: "Tutorial",
        type: "default",
      },
      {
        name: "Examples",
        type: "default",
      },
      {
        name: "Quick Start",
        type: "default",
      },
      {
        name: "Vue 2 Docs",
        type: "link",
      },
      {
        name: "Migration from Vue 2",
        type: "link",
      },
    ],
  },
  ecosystem: {
    title: "Ecosystem",
    menu: [
      {
        name: "RESOURCES",
        type: "subTitle",
      },
      {
        name: "Partners",
        type: "default",
      },
      {
        name: "Themes",
        type: "default",
      },
      {
        name: "Certification",
        type: "link",
      },
      {
        name: "Jobs",
        type: "link",
      },
      {
        name: "T-Shirt Shop",
        type: "link",
      },
      {
        name: "",
        type: "divider",
      },
      {
        name: "OFFICIAL LIBRARIES",
        type: "subTitle",
      },
      {
        name: "Vue Router",
        type: "link",
      },
      {
        name: "Pinia",
        type: "link",
      },
      {
        name: "Tooling Guide",
        type: "default",
      },
      {
        name: "",
        type: "divider",
      },
      {
        name: "VIDEO COURSES",
        type: "subTitle",
      },
      {
        name: "Vue Mastery",
        type: "link",
      },
      {
        name: "Vue School",
        type: "link",
      },
      {
        name: "",
        type: "divider",
      },
      {
        name: "HELP",
        type: "link",
      },
      {
        name: "GitHub Discussions",
        type: "link",
      },
      {
        name: "DEV Community",
        type: "link",
      },
      {
        name: "",
        type: "divider",
      },
      {
        name: "NEWS",
        type: "subTitle",
      },
      {
        name: "Blog",
        type: "link",
      },
      {
        name: "Twitter",
        type: "link",
      },
      {
        name: "Events",
        type: "link",
      },
      {
        name: "Newsletters",
        type: "default",
      },
    ],
  },
  about: {
    title: "About",
    menu: [
      {
        name: "FAQ",
        type: "default",
      },
      {
        name: "Team",
        type: "default",
      },
      {
        name: "Releases",
        type: "default",
      },
      {
        name: "Community Guide",
        type: "default",
      },
      {
        name: "Code of Conduct",
        type: "default",
      },
      {
        name: "The Documentary",
        type: "link",
      },
    ],
  },
});

const menuLinkTitleList = ref<MenuLinkListType>({
  api: {
    title: "API",
  },
  playground: {
    title: "Playground",
  },
  sponsor: {
    title: "Sponsor",
  },
  partners: {
    title: "Partners",
  },
});
</script>

<style scoped lang="scss">
.nav-menu {
  display: none;

  .menu-link-a {
    display: block;
    padding: 0 12px;
    line-height: calc(var(--nav-height) - 1px);
    font-size: 13px;
    font-weight: 500;
    color: var(--nav-text-1);
    transition: color 0.25s;
    white-space: nowrap;
    &:hover {
      color: var(--brand-light);
    }
  }
}
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
  }
}
</style>
