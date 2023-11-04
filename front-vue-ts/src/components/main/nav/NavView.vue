<script setup lang="ts">
import HomeLogo from "@/assets/nav/home-logo.svg";
import SearchIcon from "@/assets/nav/search.svg";
import DownArrowIcon from "@/assets/nav/down-arrow.svg";
import LinkIcon from "@/assets/nav/link.svg";
import LanguageIcon from "@/assets/nav/language.svg";
import GithubIcon from "@/assets/nav/github.svg";
import SunIcon from "@/assets/nav/sun.svg";
import MoonIcon from "@/assets/nav/moon.svg";
import TwitterIcon from "@/assets/nav/twitter.svg";
import DiscordIcon from "@/assets/nav/discord.svg";
import ExtraIcon from "@/assets/nav/extra.svg";

import { useIsDarkStore, useIsMacStore } from "@/pinia/pinia";
const isDarkStore = useIsDarkStore();
const isMacStore = useIsMacStore();
</script>

<template>
  <header class="VPNav nav-bar stick">
    <div class="VPNavBar">
      <div class="container">
        <a class="VPNavBarTitle" href="#">
          <HomeLogo class="logo" />
          <span class="text">Vue.js</span>
        </a>
        <div class="content">
          <div class="VPNavBarSearch search">
            <div id="docsearch">
              <button
                type="button"
                class="DocSearch DocSearch-Button"
                aria-label="Search"
              >
                <span class="DocSearch-Button-Container">
                  <SearchIcon class="DocSearch-Search-Icon" />
                  <span class="DocSearch-Button-Placeholder">Search</span>
                </span>
                <span class="DocSearch-Button-Keys">
                  <kbd v-if="isMacStore.isMac" class="DocSearch-Button-Key"
                    >⌘</kbd
                  >
                  <kbd v-if="!isMacStore.isMac" class="DocSearch-Button-Key"
                    >Ctrl</kbd
                  >
                  <kbd class="DocSearch-Button-Key">K</kbd>
                </span>
              </button>
            </div>
          </div>
          <nav aria-labelledby="main-nav-aria-label" class="VPNavBarMenu menu">
            <span id="main-nav-aria-label" class="visually-hidden">
              Main Navigation
            </span>
            <div class="vt-flyout VPNavBarMenuGroup">
              <button
                type="button"
                class="vt-flyout-button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="vt-flyout-button-text">
                  Docs
                  <DownArrowIcon class="vt-flyout-button-text-icon" />
                </span>
              </button>
              <div class="vt-flyout-menu">
                <div class="vt-menu">
                  <div class="vt-menu-items">
                    <a class="vt-link link vt-menu-link" href="#"> Guide </a>
                    <a class="vt-link link vt-menu-link" href="#"> Tutorial </a>
                    <a class="vt-link link vt-menu-link" href="#"> Examples </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Quick Start
                    </a>
                    <a class="vt-link link vt-menu-link" href="#"> Glossary </a>
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vue 2 Docs
                      <LinkIcon class="vt-link-icon" />
                    </a>
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Migration from Vue 2
                      <LinkIcon class="vt-link-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a class="vt-link link VPNavBarMenuLink" href="#">API</a>
            <a
              class="vt-link link VPNavBarMenuLink"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playground
            </a>
            <div class="vt-flyout VPNavBarMenuGroup">
              <button
                type="button"
                class="vt-flyout-button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="vt-flyout-button-text">
                  Ecosystem
                  <DownArrowIcon class="vt-flyout-button-text-icon" />
                </span>
              </button>
              <div class="vt-flyout-menu">
                <div class="vt-menu">
                  <div class="vt-menu-items">
                    <div class="vt-menu-group">
                      <p class="vt-menu-group-title">Resources</p>
                      <a class="vt-link link vt-menu-link" href="#">
                        Partners
                      </a>
                      <a class="vt-link link vt-menu-link" href="#"> Themes </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Certification
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jobs
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        T-Shirt Shop
                        <LinkIcon class="vt-link-icon" />
                      </a>
                    </div>
                    <div class="vt-menu-group">
                      <p class="vt-menu-group-title">Official Libraries</p>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue Router
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pinia
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a class="vt-link link vt-menu-link" href="#">
                        Tooling Guide
                      </a>
                    </div>

                    <div class="vt-menu-group">
                      <p class="vt-menu-group-title">Video Courses</p>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue Mastery
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue School
                        <LinkIcon class="vt-link-icon" />
                      </a>
                    </div>

                    <div class="vt-menu-group">
                      <p class="vt-menu-group-title">Help</p>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Discord Chat
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub Discussions
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DEV Community
                        <LinkIcon class="vt-link-icon" />
                      </a>
                    </div>

                    <div class="vt-menu-group">
                      <p class="vt-menu-group-title">News</p>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Blog
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Events
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a class="vt-link link vt-menu-link" href="#">
                        Newsletters
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="vt-flyout VPNavBarMenuGroup">
              <button
                type="button"
                class="vt-flyout-button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="vt-flyout-button-text"
                  >About
                  <DownArrowIcon class="vt-flyout-button-text-icon" />
                </span>
              </button>
              <div class="vt-flyout-menu">
                <div class="vt-menu">
                  <div class="vt-menu-items">
                    <a class="vt-link link vt-menu-link" href="#"> FAQ </a>
                    <a class="vt-link link vt-menu-link" href="#"> Team </a>
                    <a class="vt-link link vt-menu-link" href="#"> Releases </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Community Guide
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Code of Conduct
                    </a>
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Documentary
                      <LinkIcon class="vt-link-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a class="vt-link link VPNavBarMenuLink" href="#"> Sponsor </a>
            <a class="vt-link link VPNavBarMenuLink" href="#"> Partners </a>
            <div class="vt-flyout VPNavBarMenuGroup active VPNavBarLocale">
              <button
                type="button"
                class="vt-flyout-button"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Select Language"
              >
                <div class="vt-locales-btn-icon-container">
                  <LanguageIcon class="vt-locales-btn-icon" />
                </div>
              </button>
              <div class="vt-flyout-menu">
                <div class="vt-menu">
                  <div class="vt-menu-items x-padding">
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                      >
                        简体中文
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        href="#"
                        title="简体中文 Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                      >
                        <GithubIcon class="vt-locales-btn-icon repo" />
                      </a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >日本語 <LinkIcon class="vt-link-icon" /> </a
                      ><a
                        href="#"
                        title="日本語 Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >Українська
                        <LinkIcon class="vt-link-icon" />
                      </a>
                      <a
                        href="#"
                        title="Українська Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >Français <LinkIcon class="vt-link-icon" /> </a
                      ><a
                        href="#"
                        title="Français Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >한국어 <LinkIcon class="vt-link-icon" /> </a
                      ><a
                        href="#"
                        title="한국어 Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >Português <LinkIcon class="vt-link-icon" /> </a
                      ><a
                        href="#"
                        title="Português Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                    <div class="vt-locales-menu-item">
                      <a
                        class="vt-locales-menu-item-text"
                        href="#"
                        target="_blank"
                        >বাংলা <LinkIcon class="vt-link-icon" /> </a
                      ><a
                        href="#"
                        title="বাংলা Repository"
                        target="_blank"
                        class="vt-locales-btn-icon-container"
                        ><GithubIcon class="vt-locales-btn-icon repo"
                      /></a>
                    </div>
                  </div>

                  <div class="vt-locales-menu-hr-divider"></div>
                  <div class="vt-locales-menu-item join-translations">
                    <div
                      role="link"
                      tabindex="0"
                      class="vt-locales-menu-item-text"
                    >
                      Help Us Translate!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div class="VPNavBarAppearance appearance">
            <button
              class="vt-switch vt-switch-appearance"
              type="button"
              role="switch"
              aria-label="Toggle dark mode"
              aria-checked="false"
              @click="isDarkStore.toggle()"
            >
              <span class="vt-switch-check">
                <span class="vt-switch-icon">
                  <SunIcon class="opacity-100 dark:opacity-0" />
                  <MoonIcon class="opacity-0 dark:opacity-100" />
                </span>
              </span>
            </button>
          </div>
          <div class="vt-social-links VPNavBarSocialLinks social-links">
            <a
              class="vt-social-link is-small"
              href="#"
              title="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon class="vt-social-link-icon" />
              <span class="visually-hidden">github</span>
            </a>
            <a
              class="vt-social-link is-small"
              href="#"
              title="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon class="vt-social-link-icon" />
              <span class="visually-hidden">twitter</span>
            </a>
            <a
              class="vt-social-link is-small"
              href="#"
              title="discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon class="vt-social-link-icon" />
              <span class="visually-hidden">discord</span>
            </a>
          </div>

          <div class="vt-flyout VPNavBarExtra extra">
            <button
              type="button"
              class="vt-flyout-button"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="extra navigation"
            >
              <ExtraIcon class="vt-flyout-button-icon" />
            </button>
            <div class="vt-flyout-menu">
              <div class="vt-menu">
                <div class="vt-menu-group">
                  <div class="vt-menu-item item">
                    <p class="vt-menu-label">Appearance</p>
                    <div class="vt-menu-action action">
                      <button
                        class="vt-switch vt-switch-appearance"
                        type="button"
                        role="switch"
                        aria-label="Toggle dark mode"
                        aria-checked="false"
                        @click="isDarkStore.toggle()"
                      >
                        <span class="vt-switch-check">
                          <span class="vt-switch-icon">
                            <SunIcon class="opacity-100 dark:opacity-0" />
                            <MoonIcon class="opacity-0 dark:opacity-100" />
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vt-menu-group">
                  <div class="vt-menu-item item">
                    <div class="vt-social-links social-links">
                      <a
                        class="vt-social-link is-small"
                        href="#"
                        title="github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon class="vt-social-link-icon" />
                        <span class="visually-hidden">github</span></a
                      ><a
                        class="vt-social-link is-small"
                        href="#"
                        title="twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon class="vt-social-link-icon" />
                        <span class="visually-hidden">twitter</span></a
                      ><a
                        class="vt-social-link is-small"
                        href="#"
                        title="discord"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <DiscordIcon class="vt-social-link-icon" />
                        <span class="visually-hidden">discord</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
body .dark {
  color: rgba(255, 255, 255, 0.87);
  background-color: #1a1a1a;
}

body {
  color: #213547;
  background-color: #ffffff;
}

*,
:before,
:after {
  box-sizing: border-box;
}

.VPNav {
  position: relative;
  top: 0;
  left: 0;
  z-index: 20;
}
@media (min-width: 960px) {
  .VPNav {
    position: fixed;
    top: 0px;
    width: 100%;
  }
}

.VPNavBar {
  position: relative;
  border-bottom: 1px solid rgba(60, 60, 60, 0.12);
  padding: 0 12px 0 24px;
  height: 55px;
  background-color: #fff;
  white-space: nowrap;
  transition:
    border-color 0.5s,
    background-color 0.5s;
}
.dark .VPNavBar {
  background-color: #1a1a1a;
}

@media (min-width: 1280px) {
  .VPNavBar {
    padding: 0 32px;
  }
}

@media (min-width: 768px) {
  .VPNavBar {
    padding: 0 12px 0 32px;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1376px;
}

.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: 55px;
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}

.dark .text {
  color: rgba(255, 255, 255, 0.87);
}

.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.VPNavBarSearch {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

@media (min-width: 768px) {
  .VPNavBarSearch {
    flex-grow: 1;
  }
}

.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 48px;
  height: 55px;
  background: transparent;
  border: 0;
  border-radius: 40px;
  color: rgba(60, 60, 60, 0.7);
  cursor: pointer;
  font-weight: 500;
  padding: 0 8px;
  user-select: none;
}

@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    width: 100%;
  }
}

.DocSearch-Button-Container {
  align-items: center;
  display: flex;
}

.DocSearch-Button .DocSearch-Button-Keys {
  display: none;
  gap: 2px;
  min-width: auto;
  box-sizing: border-box;
  border: 1px solid rgba(60, 60, 60, 0.33);
  border-radius: 4px;
  padding: 0 6px;
  font-family: inherit;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
  font-weight: 500;
  transition:
    color 0.5s,
    border-color 0.5s;
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Search-Icon {
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}
@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Button-Keys {
    display: flex;
  }
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: rgba(60, 60, 60, 0.7);
  transition: color 0.5s;
  position: relative;
}

.dark .DocSearch-Button .DocSearch-Search-Icon {
  color: rgba(235, 235, 235, 0.6);
}

.DocSearch-Search-Icon {
  stroke-width: 1.6;
}

.DocSearch-Button-Placeholder {
  transition: color 0.5s;
  font-size: 13px;
  font-weight: 500;
  color: rgba(60, 60, 60, 0.7);
  display: none;
  padding: 0 10px 0 0;
}
.dark .DocSearch-Button-Placeholder {
  color: rgba(235, 235, 235, 0.6);
}

@media (min-width: 960px) {
  .DocSearch-Button-Placeholder {
    display: inline-block;
  }
}

.DocSearch-Button-Keys {
  display: flex;
  min-width: calc(40px + 0.8em);
}

.DocSearch-Button .DocSearch-Button-Key {
  width: auto;
  min-width: auto;
  font-family: inherit;
  font-size: 12px;
  height: 22px;
  padding: 0;
  margin: 0;
  color: rgba(60, 60, 60, 0.33);
  transition: color 0.5s;
}

.DocSearch-Button-Key {
  align-items: center;
  background: transparent;
  border-radius: 3px;
  color: rgba(60, 60, 60, 0.7);
  display: flex;
  height: 18px;
  justify-content: center;
  margin-right: 0.4em;
  position: relative;
  padding: 0 0 2px;
  border: 0;
  top: -1px;
  width: 20px;
}

.VPNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu {
    display: flex;
  }
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.vt-flyout {
  position: relative;
}

.vt-flyout-button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 55px;
  color: #213547;
  transition: color 0.5s;
}
.dark .vt-flyout-button {
  color: rgba(255, 255, 255, 0.87);
}

.vt-flyout-button:hover {
  color: rgba(60, 60, 60, 0.7);
  transition: color 0.25s;
}

.vt-flyout-button-text {
  display: flex;
  align-items: center;
  line-height: 55px;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.25s;
  white-space: nowrap;
}

.vt-flyout-button-text-icon {
  margin-left: 4px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.vt-flyout-menu {
  max-height: calc(100vh - 55px) !important;
  display: flex;
  position: absolute;
  top: calc(var(55px) / 2 + 15px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity 0.25s,
    visibility 0.25s,
    transform 0.25s;
  max-height: calc(100vh - 55px);
}

.vt-menu {
  border-radius: 8px;
  padding: 12px 0;
  min-width: 192px;
  border: 1px solid transparent;
  background: #fff;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.1),
    0 2px 6px rgba(0, 0, 0, 0.08);
  transition: background-color 0.5s;
  overflow: auto;
}

.vt-menu-items {
  transition: border-color 0.5s;
}

.vt-menu-link {
  display: block;
  padding: 0 18px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: #213547;
  white-space: nowrap;
  transition: color 0.25s;
}

.vt-menu-link:hover {
  color: #42b883;
}

.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: calc(55px - 1px);
  font-size: 13px;
  font-weight: 500;
  color: #213547;
  transition: color 0.25s;
  white-space: nowrap;
}

.dark .VPNavBarMenuLink {
  color: rgba(255, 255, 255, 0.87);
}

.VPNavBarMenuLink:hover {
  color: #42b883;
}

.vt-link-icon {
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  fill: rgba(60, 60, 60, 0.33);
  transition: fill 0.25s;
}

.VPNavBarMenuGroup:hover + .vt-flyout-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.vt-flyout:hover .vt-flyout-menu,
.vt-flyout-button[aria-expanded="true"] + .vt-flyout-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.vt-menu-group-title {
  padding: 0 18px;
  line-height: 28px;
  font-size: 10px;
  font-weight: 600;
  color: rgba(60, 60, 60, 0.33);
  text-transform: uppercase;
  transition: color 0.25s;
}

.vt-locales-btn-icon-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.vt-flyout-button .vt-locales-btn-icon-container:before {
  width: 1px;
  height: 24px;
  background-color: rgba(60, 60, 60, 0.12);
  content: "";
  margin-right: 4px;
}

.vt-flyout-button .vt-locales-btn-icon-container:after {
  width: 1px;
  height: 24px;
  background-color: rgba(60, 60, 60, 0.12);
  content: "";
  margin-left: 4px;
}

.vt-locales-btn-icon {
  width: 1rem;
  height: 1rem;
  fill: #213547;
  margin: 0 0.5rem;
}

.dark .vt-locales-btn-icon {
  fill: rgba(255, 255, 255, 0.87);
}

.x-padding {
  padding: 0 14px;
}

.vt-locales-menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  font-size: 0.875rem;
  position: relative;
}

.vt-locales-menu-item-text:hover {
  color: #42b883;
}

.vt-locales-menu-hr-divider {
  margin-top: 4px;
  margin-bottom: 4px;
  width: 100%;
  height: 1px;
  background-color: rgba(60, 60, 60, 0.12);
}

.join-translations {
  margin-top: 8px;
  padding: 0 14px;
}

.join-translations .vt-locales-menu-item-text {
  cursor: pointer;
}

.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: block;
  }
}

.appearance {
  margin-left: 8px;
}

.vt-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid rgba(60, 60, 60, 0.29);
  background-color: #f1f1f1;
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.dark .vt-switch {
  background-color: #2f2f2f;
  border-color: rgba(84, 84, 84, 0.65);
}

.dark .vt-switch:hover {
  border-color: #8e8e8e;
}

.vt-switch-check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06);
  transition:
    background-color 0.25s,
    transform 0.25s;
}

.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.vt-switch-icon svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: rgba(60, 60, 60, 0.7);
}

.dark .vt-switch-icon svg {
  fill: rgba(255, 255, 255, 0.87);
  transition: opacity 0.25s;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translate(18px);
}

.dark .vt-switch-check {
  background-color: #1a1a1a;
}

.appearance + .social-links {
  margin-left: 12px;
}

.VPNavBarSocialLinks {
  display: none;
  margin-right: -10px;
}

@media (min-width: 1280px) {
  .VPNavBarSocialLinks {
    display: flex;
  }
}

.visually-hidden {
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.vt-social-link.is-small {
  width: 36px;
  height: 36px;
}

.vt-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(60, 60, 60, 0.7);
  transition: color 0.5s;
}

.dark .vt-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(235, 235, 235, 0.6);
  transition: color 0.5s;
}

.vt-social-link.is-small .vt-social-link-icon {
  width: 20px;
  height: 20px;
}

.vt-social-link-icon {
  fill: currentColor;
}

.VPNavBarExtra {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarExtra {
    display: block;
  }
}

@media (min-width: 1280px) {
  .VPNavBarExtra {
    display: none;
  }
}

.vt-flyout-button-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill 0.25s;
}

.vt-menu .vt-menu-group {
  padding: 0 0 12px;
}

.item {
  display: flex;
  align-items: center;
}

.vt-menu .vt-menu-item {
  padding: 0 16px;
  white-space: nowrap;
}

.vt-menu-label {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(60, 60, 60, 0.7);
  transition: color 0.5s;
}

.dark .vt-menu-label {
  color: rgba(235, 235, 235, 0.6);
}

.action {
  margin-right: -2px;
}

.vt-menu-action {
  padding-left: 24px;
}

.social-links {
  margin: -4px -8px;
}

.vt-menu-group .vt-menu-item .vt-social-links {
  display: flex;
  justify-content: center;
}

.DocSearch-Button:hover {
  background: transparent;
}
.DocSearch-Button:hover .DocSearch-Button-Keys {
  border: 1px solid #42b883;
  color: #42b883;
}

.DocSearch-Button:hover .DocSearch-Button-Key {
  color: #42b883;
}

.dark .DocSearch-Button-Keys {
  border: 1px solid rgba(235, 235, 235, 0.38);
}

.dark .DocSearch-Button:hover .DocSearch-Button-Placeholder {
  color: rgba(255, 255, 255, 0.87);
}

.dark .DocSearch-Button:hover .DocSearch-Search-Icon {
  color: rgba(255, 255, 255, 0.87);
}

.dark .DocSearch-Button-Key {
  color: rgba(235, 235, 235, 0.38);
}

/* 추가수정 */
.vt-flyout:hover {
  transition: color 0.5s;
}

.dark .vt-flyout-button {
  color: rgba(255, 255, 255, 0.87);
}

.vt-flyout:hover .vt-flyout-button-text {
  color: rgba(60, 60, 60, 0.7);
}

.dark .vt-flyout:hover .vt-flyout-button-text {
  color: rgba(255, 255, 255, 0.87);
}

.vt-flyout:hover .vt-flyout-button-text .vt-flyout-button-text-icon {
  color: rgba(60, 60, 60, 0.7);
}

.dark .vt-flyout:hover .vt-flyout-button-text .vt-flyout-button-text-icon {
  color: rgba(255, 255, 255, 0.87);
}

.dark .vt-social-link:hover {
  color: rgba(255, 255, 255, 0.87);
  transition: color 0.25s;
}

.dark .vt-menu {
  background: #1a1a1a;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(84, 84, 84, 0.48);
}
</style>
