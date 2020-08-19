<template>
  <div class="carousel-side">
    <div class="carousel-side-text">
      <span class="mb-4 d-inline-block">
        歡迎來到
      </span>
      <span>
        喵喵咖啡館
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSide',
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.carousel {
  &-side {
    width: 170px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;

    @include media-down(lg) {
      margin-top: 100px;
      width: 100px;
    }
    @include media-down(sm) {
      margin-top: 0;
      width: 50px;
      height: inherit;
    }

    &-text {
      width: 20px;
      display: inline-block;
      word-wrap: break-word;
    }
  }
}
</style>
