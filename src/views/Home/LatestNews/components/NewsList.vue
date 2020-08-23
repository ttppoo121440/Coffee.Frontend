<template>
  <VueSlickCarousel
    v-bind="settings"
    class="w-100 list"
  >
    <div
      v-for="news in data"
      :key="news.text"
      class="p-3"
    >
      <div class="list-item">
        <div class="list-pic mb-2">
          <img
            :src="news.pic"
            class="img-fluid"
            draggable="false"
          >
          <span>{{ news.text }}</span>
        </div>
        <span class="text-primary">{{ news.date }}</span>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'NewsList',
  components: { VueSlickCarousel },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: Object.freeze({
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }),
    };
  },
};
</script>
