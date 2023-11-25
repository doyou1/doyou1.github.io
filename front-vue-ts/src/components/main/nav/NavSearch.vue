<script setup lang="ts">
import SearchIcon from "@/assets/nav/search.svg";
import { useIsMacStore } from "@/pinia/pinia";

const isMacStore = useIsMacStore();
</script>
<template>
  <div class="search">
    <div>
      <button type="button" class="search__button">
        <span class="search__button__container">
          <SearchIcon class="search__button__icon" />
          <span class="search__button__placeholder"> Search </span>
        </span>
        <span class="search__button__keys">
          <kdb v-if="isMacStore.isMac" class="search__button__key">⌘</kdb>
          <kdb v-else class="search__button__key">Ctrl</kdb>
          <kdb class="search__button__key">K</kdb>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search {
  --nav-search-text-color: #213547;
}

.dark .search {
  --nav-search-text-color: rgba(255, 255, 255, 0.87);
}

.search {
  display: flex;
  align-items: center;
  padding-left: 16px;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 48px;
    height: var(--nav-height);

    &__container {
      display: flex;
      align-items: center;
    }

    &__icon {
      color: var(--nav-text-2);
      transition: color, 0.5s;
      width: 18px;
      height: 18px;
      position: relative;
    }

    &__placeholder {
      transition: color, 0.5s;
      font-size: 13px;
      font-weight: 500;
      color: var(--nav-text-2);
      display: none;
      padding-right: 10px;
    }

    &__keys {
      display: none;
      gap: 2px;
      min-width: auto;
      border: 1px solid var(--nav-text-3);
      border-radius: 4px;
      padding: 0 6px;
      font-size: 12px;
      height: 22px; // memo: why 22px?
      line-height: 22px;
      font-weight: 500;
      transition:
        color 0.5s,
        border-color 0.5s;
    }

    &__key {
      width: auto;
      min-width: auto;
      font-size: 12px;
      height: 22px;
      margin: 0;
      padding: 0;
      color: var(--nav-text-3);
      transition: color 0.5s;

      align-items: center;
      background-color: transparent;
    }

    &:hover {
      background-color: transparent;
      box-shadow: none;
      color: var(--nav-search-text-color);
      outline: none;
    }

    &:hover &__icon,
    &:hover &__placeholder {
      color: var(--nav-text-1);
    }

    &:hover &__keys {
      border-color: var(--brand-light);
    }

    &:hover &__key {
      color: var(--brand-light);
    }
  }
}

@media (min-width: 768px) {
  .search {
    &__button {
      justify-content: flex-start;
      width: 100%;
      &__icon {
        top: 1px;
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
      &__keys {
        display: flex;
      }
    }
  }
}

@media (min-width: 960px) {
  .search {
    flex-grow: 1;

    &__button {
      &__placeholder {
        display: inline-block;
      }
      &__icon {
        top: 1px;
        margin-right: 10px;
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>
