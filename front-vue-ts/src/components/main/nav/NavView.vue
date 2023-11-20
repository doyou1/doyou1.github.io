<script setup lang="ts">
// import LanguageIcon from "@/assets/nav/language.svg";
// import GithubIcon from "@/assets/nav/github.svg";
// import SunIcon from "@/assets/nav/sun.svg";
// import MoonIcon from "@/assets/nav/moon.svg";
// import TwitterIcon from "@/assets/nav/twitter.svg";
// import DiscordIcon from "@/assets/nav/discord.svg";
// import ExtraIcon from "@/assets/nav/extra.svg";

import NavLogo from "@/components/main/nav/NavLogo.vue";
import NavSearch from "@/components/main/nav/NavSearch.vue";
import NavMenu from "@/components/main/nav/NavMenu.vue";
</script>

<template>
  <div class="container">
    <NavLogo />
    <div class="content">
      <NavSearch />
      <NavMenu />
    </div>
  </div>
</template>

<style scoped lang="scss">
/** 변수 설정 */
.container {
  --fill-background: #ffffff;
  --nav-text-1: #213547;
  --nav-text-2: rgba(60, 60, 60, 0.7);
  --nav-text-3: rgba(60, 60, 60, 0.33);
  --nav-border-1: transparent;
  --nav-shadow-1: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --nav-divider-light: rgba(60, 60, 60, 0.12);
  --brand-light: #42d392;
  --nav-height: 55px;
}

.dark .container {
  --fill-background: #1a1a1a;
  --nav-text-1: rgba(255, 255, 255, 0.87);
  --nav-text-2: rgba(235, 235, 235, 0.6);
  --nav-text-3: rgba(235, 235, 235, 0.38);
  --nav-border-1: rgba(84, 84, 84, 0.48);
  --nav-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --nav-divider-light: rgba(84, 84, 84, 0.48);
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: var(--fill-background);

  .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }
}
</style>
