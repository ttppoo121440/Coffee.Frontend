<template>
  <div class="carousel">
    <CarouselSide />
    <div class="banner" />
    <span class="banner-text">歡迎光臨</span><br>
    <span class="banner-text">澳洲人咖啡館</span>
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
.carousel {
  position: relative;
  @at-root .banner {
    z-index: -1;
    position: absolute;
    background: url("~@/assets/images/banner.png") no-repeat center center;
    background-size: cover;
    top: -200px;
    right: 0;
    left: 170px;
    height: 837px;

    &-text {
      position: absolute;
      color: $white;
      font-size: 80px;

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
