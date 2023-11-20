<template>
  <div class="menu-group locale">
    <button class="locale__button">
      <div class="locale__button__icon__container">
        <LanguageIcon />
      </div>
    </button>
    <div class="locale__menu">
      <div class="container">
        <div class="container__items">
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              简体中文
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              日本語
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              Українська
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              Français
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              한국어
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              Português
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              বাংলা
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
          <div class="container__items__item">
            <a class="container__items__item__text" href="#">
              Italiano
              <LinkIcon />
            </a>
            <a class="container__items__item__icon" href="#">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div class="container__divider" />
        <div class="container__text">
          <a class="container__text__link" href="#">Help Us Translate!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkIcon from "@/assets/nav/link.svg";
import LanguageIcon from "@/assets/nav/language.svg";
import GithubIcon from "@/assets/nav/github.svg";
</script>

<style setup lang="scss">
.locale {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: var(--nav-height);
    color: var(--nav-text-1);
    transition: color 0.5s;

    &__icon__container {
      display: flex;
      align-items: center;
      cursor: pointer;

      &:before {
        margin-right: 4px;
        width: 1px;
        height: 24px;
        background-color: var(--nav-divider-light);
        content: "";
      }

      svg {
        width: 1rem;
        height: 1rem;
        color: var(--nav-text-1);
        margin: 0 0.5rem;
      }

      &:after {
        margin-left: 4px;
        width: 1px;
        height: 24px;
        background-color: var(--nav-divider-light);
        content: "";
      }
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
        padding: 0 14px;
        transition: border-color 0.5s;

        &__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 6px;
          font-size: 0.875rem;
          position: relative;

          &__text {
            svg {
              display: inline-block;
              margin-top: -2px;
              margin-left: 4px;
              width: 11px;
              height: 11px;
              color: var(--nav-text-3);
              transition: fill 0.25s;
            }

            &:hover {
              color: var(--brand-light);
            }
          }

          &__icon {
            display: flex;
            align-items: center;
            svg {
              width: 1rem;
              height: 1rem;
              color: var(--nav-text-1);
              margin: 0 0.5rem;
            }
          }
        }
      }

      &__divider {
        margin-top: 4px;
        margin-bottom: 4px;
        width: 100%;
        height: 1px;
        background-color: var(--nav-divider-light);
      }

      &__text {
        margin-top: 8px;
        padding: 0 14px;

        &__link {
          font-size: 0.875rem;

          &:hover {
            color: var(--brand-light);
          }
        }
      }
    }
  }

  :hover &__menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
