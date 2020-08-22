<template>
  <VueSlickCarousel
    v-bind="settings"
    class="text-center"
  >
    <div class="carousel-item">
      <button
        type="button"
        class="btn btn-outline"
        :class="{ active: active === '全部' }"
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
        class="btn btn-outline"
        :class="{ active: active === category }"
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
  name: 'Category',
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
      settings: Object.freeze({
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      }),
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

<style lang="scss" src="./style.scss"></style>
