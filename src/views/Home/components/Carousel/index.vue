<template>
  <div class="carousel">
    <CarouselSide />
    <div class="banner" />
    <span class="banner-text">歡迎光臨</span><br>
    <span class="banner-text">喵喵咖啡館</span>
    <BannerBottom />
  </div>
</template>

<script>
import BannerBottom from './BannerBottom';
import CarouselSide from './CarouselSide';

export default {
  name: 'Carousel',
  components: {
    BannerBottom,
    CarouselSide,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

.carousel {
  position: relative;
  height: 78vh;

 @include media-down(lg) {
    height: 90vh;
  }
  @include media-down(md) {
    height: 90vh;
  }
  @include media-down(sm) {
    height: 100vh;
  }
  @at-root .banner {
    z-index: -1;
    position: absolute;
    background: url("~@/assets/images/banner.png") no-repeat center center;
    background-size: cover;
    top: -200px;
    bottom: 100px;
    right: 0;
    left: 170px;

    @include media-down(lg) {
      left: 100px;
    }

    @include media-down(sm) {
      bottom: 0px;
      left: 50px;
    }

    &-text {
      position: absolute;
      color: $white;
      font-size: 80px;
      @include media-down(sm) {
        display: none;
      }

      &:nth-of-type(1) {
        top: 32%;
        left: 21%;
      }
      &:nth-of-type(2) {
        top: 45%;
        left: 21%;
      }
    }
  }
}
</style>
