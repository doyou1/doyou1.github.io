<script setup>
import "@/styles/navView.css";
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
                  <kbd class="DocSearch-Button-Key" v-if="isMacStore.isMac"
                    >⌘</kbd
                  >
                  <kbd class="DocSearch-Button-Key" v-if="!isMacStore.isMac"
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
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                    >
                      Guide
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Tutorial
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Examples
                    </a>
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                    >
                      Quick Start
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Glossary
                    </a>
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
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                      >
                        Themes
                      </a>
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
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                      >
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
                      <a
                        class="vt-link link vt-menu-link"
                        href="#"
                      >
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
                    <a class="vt-link link vt-menu-link" href="#">
                      FAQ
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Team
                    </a>
                    <a class="vt-link link vt-menu-link" href="#">
                      Releases
                    </a>
                    <a
                      class="vt-link link vt-menu-link"
                      href="#"
                    >
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
            <a class="vt-link link VPNavBarMenuLink" href="#">
              Sponsor
            </a>
            <a class="vt-link link VPNavBarMenuLink" href="#">
              Partners
            </a>
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
                        >日本語
                        <LinkIcon class="vt-link-icon" /> </a
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
                        >Français
                        <LinkIcon class="vt-link-icon" /> </a
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
                        >한국어
                        <LinkIcon class="vt-link-icon" /> </a
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
                        >Português
                        <LinkIcon class="vt-link-icon" /> </a
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
                        >বাংলা
                        <LinkIcon class="vt-link-icon" /> </a
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

          <div
            class="vt-flyout VPNavBarExtra extra"
          >
            <button
              type="button"
              class="vt-flyout-button"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="extra navigation"
            >
                <ExtraIcon class="vt-flyout-button-icon"/>
            </button>
            <div class="vt-flyout-menu">
              <div class="vt-menu">
                <div class="vt-menu-group" >
                  <div class="vt-menu-item item" >
                    <p class="vt-menu-label" >Appearance</p>
                    <div class="vt-menu-action action" >
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
                <div class="vt-menu-group" >
                  <div class="vt-menu-item item" >
                    <div
                      class="vt-social-links social-links">
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
