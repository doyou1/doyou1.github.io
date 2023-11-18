<script setup lang="ts">
// import DownArrowIcon from "@/assets/nav/down-arrow.svg";
// import LinkIcon from "@/assets/nav/link.svg";
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
  --brand-light: #42d392;
  --nav-text-1: #213547;
  --nav-text-2: rgba(60, 60, 60, 0.7);
  --nav-text-3: rgba(60, 60, 60, 0.33);
  --nav-height: 55px;
}

.dark .container {
  --fill-background: #1a1a1a;
  --nav-text-2: rgba(235, 235, 235, 0.6);
  --nav-text-1: rgba(255, 255, 255, 0.87);
  --nav-text-3: rgba(235, 235, 235, 0.38);
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
