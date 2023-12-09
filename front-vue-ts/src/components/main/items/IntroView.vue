<script setup lang="ts">
import PlayIcon from "@/assets/intro/play-icon.svg";
import ArrowIcon from "@/assets/intro/arrow.svg";
</script>

<template>
  <section class="intro-container intro">
    <!-- INTRO TITLE  -->
    <h1 class="intro-container__title-h1">
      The <span class="intro-container__title-h1__title-span">Progressive</span>
      <br />
      JavaScript Framework
    </h1>

    <!-- INTRO explanation-->
    <p class="intro-container__explam">
      An approachable, performant and versatile framework for building web user
      interfaces.
    </p>

    <!-- INTRO BUTTON -->
    <p class="intro-container__button">
      <a href="#" class="intro-container__button__why-vue">
        <PlayIcon class="intro-container__button__why-vue__play-icon">
        </PlayIcon>
        Why Vue</a
      >
      <a href="#" class="intro-container__button__get-started"
        >Get Started
        <ArrowIcon
          class="intro-container__button__get-started__arrow"
        ></ArrowIcon>
      </a>
      <a href="#" class="intro-container__button__install">Install</a>
    </p>
  </section>
</template>

<!-- Style -->
<style scoped lang="scss">
.intro {
  --hover-green: #33a06f;
  --hover-gray-3: #e5e5e5;
}
.dark .intro {
  --hover-green: #42d392;
  --hover-gray-3: #3a3a3a;
}
.intro-container {
  padding: 148px 32px;
  text-align: center;
  transition: background-color 0.5s;
  font-size: 1.5em;

  &__title-h1 {
    color: #213547;
    font-size: 76px;
    line-height: 1.25;
    font-weight: 800;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;

    &__title-span {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: background 0.5s;
    }
  }

  &__explam {
    max-width: 960px;
    line-height: 1.5;
    letter-spacing: 0.25px;
    transition: color 0.9s;
    font-size: 22px;
    font-weight: 300;
    color: rgba(60, 60, 60, 0.6);
    margin: 24px auto 40px;
  }

  &__button {
    &__why-vue {
      font-size: 16px;
      display: inline-block;
      border-radius: 8px;
      transition:
        background-color 0.5s,
        color 0.5s;
      position: relative;
      font-weight: 500;
      letter-spacing: 0.5px;
      background-color: #42b883;
      color: #fff;
      margin-right: 18px;
      padding: 8px 1em 8px 3em;
      &:hover {
        background-color: var(--hover-green);
        transition-duration: 0.2s;
      }
      &__play-icon {
        display: inline;
        position: absolute;
        left: 15px;
        top: 8px;
        margin-left: 2px;
        fill: currentColor;
        width: 1.5em;
      }
    }
    &__get-started {
      &__arrow {
        display: inline;
        position: relative;
        top: -1px;
        margin-left: 2px;
        fill: currentColor;

        transition: transform 0.2s;
      }
      &:hover &__arrow {
        transform: translateX(2px);
      }
    }

    &__get-started,
    &__install {
      display: inline-block;
      color: #476582;
      font-size: 16px;
      background-color: #f1f1f1;
      letter-spacing: 0.5px;
      margin-right: 18px;
      padding: 8px 18px;
      font-weight: 400;
      border-radius: 8px;
      transition:
        background-color 0.5s,
        color 0.5s;
      &:hover {
        background-color: var(--hover-gray-3);
        transition-duration: 0.2s;
      }
    }
  }
}

// ===============================
//        Dark mode styles
// ===============================
.dark {
  .intro-container {
    // Adjust styles for dark mode
    background-color: #1a1a1a;
    transition: background-color 0.5s;
    &__title-h1 {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: background 0.5s;
    }

    &__explam {
      color: rgba(235, 235, 235, 0.6);
      transition: color 0.9s;
    }

    &__button {
      &__why-vue {
        color: #213547;
        transition: color 0.5s;
      }
      &__get-started,
      &__install {
        color: #aac8e4;
        background-color: #2f2f2f;
        transition:
          background-color 0.5s,
          color 0.5s;
        &:hover {
          background-color: #3a3a3a;
          transition-duration: 0.2s;
        }
      }
    }
  }
}
// ===============================
//          MEDIA QUREIES
// ===============================

/* 미디어 쿼리: 화면 너비가 960px 이하일 때 */
@media (max-width: 960px) {
  .intro-container {
    padding: 96px 32px;
    &__title-h1 {
      font-size: 64px;
      letter-spacing: -0.5px;
    }
    &__explam {
      font-size: 18px;
      margin-bottom: 48px;
    }
  }
}
/* 미디어 쿼리: 화면 너비가 768px 이하일 때 */
@media (max-width: 768px) {
  .intro-container {
    &__title-h1 {
      font-size: 48px;
      letter-spacing: -0.5px;
    }
  }
}

/* 미디어 쿼리: 화면 너비가 576px 이하일 때 */
@media (max-width: 576px) {
  .intro-container {
    padding: 56px 32px;
    &__explam {
      font-size: 16px;
      margin: 18px 0 30px;
    }
    &__button {
      &__why-vue {
        display: block;
        margin: 0 auto;
        width: 150px;
      }
      &__get-started,
      &__install {
        margin: 18px 0;
        margin-right: 18px;
      }
    }
  }
}
</style>
