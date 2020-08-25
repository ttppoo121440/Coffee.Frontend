<template>
  <div class="banner-block">
    <CarouselSide />
    <div class="banner" />
    <span class="banner-text">歡迎光臨</span><br>
    <span class="banner-text">喵喵咖啡館</span>
    <BannerBottom />
  </div>
</template>

<script>
import BannerBottom from './BannerBottom.vue';
import CarouselSide from './CarouselSide.vue';

export default {
  name: 'Carousel',
  components: {
    BannerBottom,
    CarouselSide,
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
