<template>
  <div class="menu-group">
    <button type="button" class="menu-group__button">
      <span class="menu-group__button__text"
        >{{ menuGroup.title }}
        <DownArrowIcon class="menu-group__button__text__icon" />
      </span>
    </button>
    <div class="menu-group__menu">
      <div class="menu-group__menu__container container">
        <div class="container__items">
          <template v-for="item in menuGroup.menu" :key="item.name">
            <a
              v-if="item.type === 'default'"
              class="container__item__default"
              href="#"
            >
              {{ item.name }}
            </a>
            <a
              v-if="item.type === 'link'"
              class="container__item__link"
              href="#"
            >
              {{ item.name }}
              <LinkIcon class="container__item__link__icon" />
            </a>
            <div
              v-if="item.type === 'subTitle'"
              class="container__item__sub-title"
            >
              <p>{{ item.name }}</p>
            </div>
            <div
              v-if="item.type === 'divider'"
              class="container__item__divider"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { MenuGroupType } from "@/composables/use-nav-menu";
import DownArrowIcon from "@/assets/nav/down-arrow.svg";
import LinkIcon from "@/assets/nav/link.svg";

defineProps<{
  menuGroup: MenuGroupType;
}>();
</script>

<style scoped lang="scss">
.menu-group {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: var(--nav-height);
    color: var(--nav-text-1);
    transition: color 0.5s;

    &__text {
      display: flex;
      align-items: center;
      line-height: var(--nav-height);
      color: var(--nav-text-1);
      font-size: 13px;
      font-weight: 500;
      transition: color 0.25s;
      white-space: nowrap;

      &__icon {
        margin-left: 4px;
        width: 14px;
        height: 14px;
      }
    }
  }

  &__menu {
    display: flex;
    position: absolute;
    max-height: calc(100vh - var(--nav-height));
    top: calc(var(--nav-height) / 1 + 15);
    right: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition:
      opacity 0.25s,
      visibility 0.25s,
      transform 0.25s;

    .container {
      border-radius: 8px;
      padding: 12px 0;
      min-width: 192px;
      border: 1px solid var(--nav-border-1);
      background-color: var(--fill-background);
      box-shadow: var(--nav-shadow-1);
      transition: background-color 0.5s;
      overflow: auto;

      &__items {
        transition: border-color 0.5s;
      }

      &__item {
        &__default,
        &__link {
          display: block;
          padding: 0 18px;
          line-height: 28px;
          font-size: 13px;
          font-weight: 400;
          color: var(--nav-text-1);
          white-space: nowrap;
          transition: color 0.25s;
          &:hover {
            color: var(--brand-light);
          }
        }

        &__link__icon {
          display: inline-block;
          margin-top: -2px;
          margin-left: 4px;
          width: 11px;
          height: 11px;
          color: var(--nav-text-3);
          transition: fill 0.25s;
        }

        &__sub-title {
          padding: 0 18px;
          line-height: 28px;
          font-size: 10px;
          font-weight: 600;
          color: var(--nav-text-3);
          text-transform: uppercase;
          transition: color 0.25s;
        }

        &__divider {
          border-top: 1px solid var(--nav-divider-light);
          margin-top: 11px;
          padding-top: 11px;
        }
      }
    }
  }

  &:hover &__button__text {
    color: var(--nav-text-2);
  }

  &:hover &__menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
