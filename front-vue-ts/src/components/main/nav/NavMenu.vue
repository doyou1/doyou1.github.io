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
    <NavMenuGroupLocale />
  </nav>
  <div class="darkmode">
    <button class="darkmode__switch" @click="handleIsDark">
      <span class="darkmode__switch__wrap">
        <span class="darkmode__switch__icon">
          <SunIcon class="darkmode__switch__icon__sun" />
          <MoonIcon class="darkmode__switch__icon__moon" />
        </span>
      </span>
    </button>
  </div>
  <div class="social-link">
    <a class="social-link__item" href="#">
      <GithubIcon class="social-link__item__icon" />
      <span class="social-link__item__hidden-text">github</span>
    </a>
    <a class="social-link__item" href="#">
      <TwitterIcon class="social-link__item__icon" />
      <span class="social-link__item__hidden-text">twitter</span>
    </a>
    <a class="social-link__item" href="#">
      <DiscordIcon class="social-link__item__icon" />
      <span class="social-link__item__hidden-text">discord</span>
    </a>
  </div>
  <div class="extra">
    <button type="button" class="extra__button">
      <ExtraIcon class="extra__button__icon" />
    </button>
    <div class="extra__menu">
      <div class="extra__menu__container">
        <div class="extra__menu__container__row">
          <div class="item">
            <p class="item__label">Appearance</p>
            <div class="item__action">
              <button class="darkmode__switch" @click="handleIsDark">
                <span class="darkmode__switch__wrap">
                  <span class="darkmode__switch__icon">
                    <SunIcon class="darkmode__switch__icon__sun" />
                    <MoonIcon class="darkmode__switch__icon__moon" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="extra__menu__container__row last">
          <div class="item">
            <div class="extra-social-link">
              <a class="extra-social-link__item" href="#">
                <GithubIcon class="extra-social-link__item__icon" />
                <span class="extra-social-link__item__hidden-text">github</span>
              </a>
              <a class="extra-social-link__item" href="#">
                <TwitterIcon class="extra-social-link__item__icon" />
                <span class="extra-social-link__item__hidden-text"
                  >twitter</span
                >
              </a>
              <a class="extra-social-link__item" href="#">
                <DiscordIcon class="extra-social-link__item__icon" />
                <span class="extra-social-link__item__hidden-text"
                  >discord</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <NavMenuMobileEntire /> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {
  MenuGroupListType,
  MenuLinkListType,
} from "@/composables/use-nav-menu";
import NavMenuGroup from "@/components/main/nav/NavMenuGroup.vue";
import NavMenuGroupLocale from "@/components/main/nav/NavMenuGroupLocale.vue";
// import NavMenuMobileEntire from "@/components/main/nav/NavMenuMobileEntire.vue";
import SunIcon from "@/assets/nav/sun.svg";
import MoonIcon from "@/assets/nav/moon.svg";
import GithubIcon from "@/assets/nav/github.svg";
import TwitterIcon from "@/assets/nav/twitter.svg";
import DiscordIcon from "@/assets/nav/discord.svg";
import ExtraIcon from "@/assets/nav/extra.svg";

import { useIsDarkStore } from "@/pinia/pinia";
const isDarkStore = useIsDarkStore();

const handleIsDark = () => {
  isDarkStore.toggle();
};

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

.darkmode {
  margin-left: 8px;
  display: none;

  &__switch {
    position: relative;
    border-radius: 11px;
    display: block;
    width: 40px;
    height: 22px;
    border: 1px solid var(--nav-divider-1);
    background-color: var(--fill-background-mute);
    transition:
      border-color 0.25s,
      background-color 0.25s;

    &__wrap {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: var(--nav-switch-wrap-bg);
      box-shadow: var(--nav-switch-wrap-shadow);
      transition:
        background-color 0.25s,
        transform 0.25s;
    }

    &__icon {
      position: relative;
      display: block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      overflow: hidden;

      svg {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 12px;
        height: 12px;
        color: var(--nav-text-2);
      }

      &__sun {
        opacity: 1;
      }

      &__moon {
        opacity: 0;
      }
    }

    &:hover {
      border-color: var(--nav-gray);
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
}

.dark .darkmode {
  &__switch {
    &__wrap {
      transform: translate(18px);
    }
    &__icon {
      &__sun {
        opacity: 0;
      }
      &__moon {
        opacity: 1;
      }
      svg {
        color: var(--nav-text-1);
        transition: opacity 0.25s;
      }
    }
  }
}

.social-link {
  margin-left: 12px;
  margin-right: -10px;
  display: none;
  justify-content: center;

  &__item {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--nav-text-2);
    transition: color 0.5s;

    &__icon {
      width: 20px;
      height: 20px;
    }

    &__hidden-text {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  }
}

.extra {
  display: none;
  &__button {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: var(--nav-height);
    color: var(--nav-text-1);
    transition: color 0.5s;

    &__icon {
      width: 20px;
      height: 20px;
      transition: fill 0.25s;
    }
  }
  &__menu {
    max-height: calc(100vh - var(--nav-height));
    display: flex;
    position: absolute;
    top: calc(var(--nav-height) / 2 + 15px);
    right: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition:
      opacity 0.25s,
      visibility 0.25s,
      transform 0.25s;

    &__container {
      border-radius: 8px;
      padding: 12px 0;
      min-width: 192px;
      border: 1px solid var(--nav-border-1);
      background: var(--fill-background);
      box-shadow: var(--nav-shadow-1);
      transition: background-color 0.5s;
      overflow: auto;

      &__row {
        padding-bottom: 12px;

        .item {
          display: flex;
          align-items: center;
          padding: 0 16px;
          white-space: nowrap;

          &__label {
            flex-grow: 1;
            line-height: 28px;
            font-size: 12px;
            font-weight: 500;
            color: var(--nav-text-2);
            transition: color 0.5s;
          }

          &__action {
            padding-left: 24px;
            margin-right: -2px;
          }

          .extra-social-link {
            margin: -4px -8px;
            display: flex;
            justify-content: center;

            &__item {
              width: 36px;
              height: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--nav-text-2);
              transition: color 0.5s;

              &__icon {
                width: 20px;
                height: 20px;
              }

              &__hidden-text {
                clip: rect(0 0 0 0);
                clip-path: inset(50%);
                height: 1px;
                overflow: hidden;
                position: absolute;
                white-space: nowrap;
                width: 1px;
              }
            }
          }
        }
      }

      &__row + .last {
        padding-bottom: 0;
        border-top: 1px solid var(--nav-divider-light);
        padding-top: 11px;
      }
    }
  }
  &:hover &__button__icon {
    color: var(--nav-text-2);
  }
  &:hover &__menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;
  }
  .extra {
    display: block;
  }
}

@media (min-width: 1280px) {
  .darkmode {
    display: block;
  }
  .social-link {
    display: flex;
  }
  .extra {
    display: none;
  }
}
</style>
