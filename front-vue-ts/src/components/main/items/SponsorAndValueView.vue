<script setup lang="ts"></script>

<template>
  <section id="sponsor-V" class="sponsor-value">
    <span class="sponsor-value__right-lead">Special Sponsor</span>
    <a href="#" target="_self" class="sponsor-value__a"
      ><img
        data-v-a5e898ee=""
        width="168"
        height="42"
        src="https://sponsors.vuejs.org/images/appwrite.svg"
        alt="appwrite"
    /></a>
    <span class="sponsor-value__left-lead"
      >Open-source backend cloud platform</span
    >
  </section>

  <section id="highlights" class="vt-box-container">
    <div class="vt-box-list">
      <div class="vt-box-container__vt-box">
        <h2>Approachable</h2>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </p>
      </div>
      <div class="vt-box-container__vt-box">
        <h2>Performant</h2>
        <p>
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </p>
      </div>
      <div class="vt-box-container__vt-box">
        <h2>Versatile</h2>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#sponsor-V,
#highlights {
  --vt-c-divider-light: rgba(60, 60, 60, 0.12);
  --vt-c-text-2: rgba(60, 60, 60, 0.7);
  --vt-c-text-1: #213547;
}
.dark #sponsor-V,
.dark #highlights {
  --vt-c-divider-light: rgba(84, 84, 84, 0.48);
  --vt-c-text-2: rgba(235, 235, 235, 0.6);
  --vt-c-text-1: rgba(255, 255, 255, 0.87);
}

.sponsor-value {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  display: flex;
  align-items: center;

  &__right-lead {
    flex: 1;
    vertical-align: middle;
    text-align: right;
    font-weight: 500;
    font-size: 13px;
    color: var(--vt-c-text-2);
  }
  &__a {
    display: flex;
    justify-content: center;
    padding: 0 24px;
  }
  &__a > img {
    height: 42px;
    margin: -6px 0;
  }
  &__left-lead {
    color: var(--vt-c-text-2);
    font-weight: 500;
    font-size: 13px;
    vertical-align: middle;
    flex: 1;
  }
}

.vt-box-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 42px 32px;
  max-width: 960px;
  margin: 0 auto;
  color: var(--vt-c-text-2);
}
.vt-box-container {
  &__vt-box {
    flex: 0 32%;
    padding: 28px 36px;
    border-radius: 8px;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    transition:
      color 0.5s,
      background-color 0.5s;
  }
  &__vt-box > h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: var(--vt-c-text-1);
    transition: color 0.5s;
    margin-bottom: 0.75em;
  }
  &__vt-box > p {
    font-weight: 400;
    font-size: 15px;
  }
}
// ===============================
//        Dark mode styles
// ===============================
.dark {
  .sponsor-value {
    // Adjust styles for dark mode
    background-color: #1a1a1a;
    transition: background-color 0.5s;
    &__a > img {
      filter: grayscale(1) invert(1);
    }
  }
  .vt-box-container {
    background-color: #1a1a1a;
    transition: background-color 0.5s;
  }
}

// ===============================
//          MEDIA QUREIES
// ===============================
@media (max-width: 768px) {
  .vt-box-container {
    &__vt-box {
      flex: 0 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 576px) {
  .sponsor-value {
    flex-direction: column;
    &__right-lead,
    &__left-lead {
      text-align: center !important;
    }
    &__a > img {
      height: 36px;
      margin: 8px 0;
    }
  }
  .vt-box-container {
    &__vt-box {
      padding: 20px 36px;
    }
  }
}
</style>
