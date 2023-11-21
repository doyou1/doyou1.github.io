<script setup lang="ts">
import NavLogo from "@/components/main/nav/NavLogo.vue";
import NavSearch from "@/components/main/nav/NavSearch.vue";
import NavMenu from "@/components/main/nav/NavMenu.vue";
</script>

<template>
  <header class="nav-wrap">
    <div class="navbar">
      <div class="container">
        <NavLogo />
        <div class="content">
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
/** 변수 설정 */
.nav-wrap {
  --fill-background: #ffffff;
  --fill-background-mute: #f1f1f1;
  --nav-text-1: #213547;
  --nav-text-2: rgba(60, 60, 60, 0.7);
  --nav-text-3: rgba(60, 60, 60, 0.33);
  --nav-border-1: transparent;
  --nav-shadow-1: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --nav-divider-light: rgba(60, 60, 60, 0.12);
  --nav-divider-1: rgba(60, 60, 60, 0.29);
  --nav-switch-wrap-bg: #ffffff;
  --nav-switch-wrap-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
    0 1px 2px rgba(0, 0, 0, 0.06);
  --nav-gray: #8e8e8e;
  --brand-light: #42d392;
  --nav-height: 55px;
  --nav-z-index: 20;
}

.dark .nav-wrap {
  --fill-background: #1a1a1a;
  --fill-background-mute: #2f2f2f;
  --nav-text-1: rgba(255, 255, 255, 0.87);
  --nav-text-2: rgba(235, 235, 235, 0.6);
  --nav-text-3: rgba(235, 235, 235, 0.38);
  --nav-border-1: rgba(84, 84, 84, 0.48);
  --nav-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --nav-divider-light: rgba(84, 84, 84, 0.48);
  --nav-divider-1: rgba(84, 84, 84, 0.65);
  --nav-switch-wrap-bg: #1a1a1a;
}

.nav-wrap {
  position: relative;
  top: 0;
  left: 0;
  z-index: var(--nav-z-index);

  .navbar {
    position: relative;
    border-bottom: 1px solid var(--nav-divider-light);
    padding-left: 24px;
    padding-right: 12px;
    height: var(--nav-height);
    background-color: var(--fill-background);
    white-space: nowrap;
    transition:
      border-color 0.5s,
      background-color 0.5s;

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
  }
}

@media (min-width: 768px) {
  .navbar {
    padding: 0 12px 0 32px;
  }
}

@media (min-width: 960px) {
  .nav-wrap {
    position: fixed;
    top: 0px;
    width: 100%;
  }
}

@media (min-width: 1280px) {
  .navbar {
    padding: 0 32px;
  }
}
</style>
