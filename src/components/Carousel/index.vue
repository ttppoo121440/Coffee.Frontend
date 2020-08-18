<template>
  <VueSlickCarousel
    v-bind="settings"
    class="text-center"
  >
    <div class="carousel-item">
      <button
        type="button"
        class="btn"
        :class="{ 'btn-outline': active !== '全部' }"
        @click="categoryHandler('全部')"
      >
        全部
      </button>
    </div>
    <div
      v-for="category in categorys"
      :key="category"
      class="carousel-item"
    >
      <button
        type="button"
        class="btn"
        :class="{ 'btn-outline': active !== category }"
        @click="categoryHandler(category)"
      >
        {{ category }}
      </button>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  props: {
    categorys: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: '全部',
      settings: {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
      },
    };
  },
  methods: {
    categoryHandler(category) {
      this.active = category;
      this.$emit('categoryHandler', category);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_functions.scss";
@import "~@/assets/scss/_variables.scss";
@import "~@/assets/scss/mixins/_breakpoints.scss";

div:focus {
  outline: none;
}
.slick-prev:before,
.slick-next:before {
  color: $primary;
}

.carousel-item {
  .btn {
    @include media-down(sm) {
      font-size: 16px;
      font-weight: normal;
      padding: 10px;
    }
  }
}
</style>
