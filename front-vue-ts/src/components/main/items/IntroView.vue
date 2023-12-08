<script setup lang="ts"></script>

<template>
  <section class="intro-container">
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
      <a href="#" class="intro-container__button__why-vue">Why vue</a>
      <a href="#" class="intro-container__button__get-started">Get Started</a>
      <a href="#" class="intro-container__button__install">Install</a>
    </p>
  </section>
</template>

<!-- Style -->
<style scoped lang="scss">
.intro-container {
  padding: 96px 32px;
  text-align: center;

  &__title-h1 {
    color: #213547;
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;

    &__title-span {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__explam {
    max-width: 960px;
    line-height: 1.5;
    color: rgba(60, 60, 60, 0.7);
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
  }
}

// ===============================
//          MEDIA QUREIES
// ===============================

/* 미디어 쿼리: 화면 너비가 960px 이하일 때 */
@media (max-width: 960px) {
  .intro-container {
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
</style>
