<template>
  <VueSlickCarousel
    v-bind="settings"
    class="w-100 list"
  >
    <div
      v-for="product in data"
      :key="product.id"
      class="p-3"
    >
      <div class="list-item">
        <div class="list-pic mb-2">
          <img
            :src="product.imageUrl"
            alt="list1"
            class="img-fluid"
            draggable="false"
          >
        </div>
        <div class="list-content">
          <h3>
            {{ product.title }}
          </h3>
          <p>售價：{{ product.price }}</p>
          <Buttons
            @goProductPage="goProductPage(product.id)"
            @addCartHandler="addCartHandler(product)"
          />
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import Buttons from './Buttons.vue';

export default {
  name: 'SlickCarousel',
  components: { VueSlickCarousel, Buttons },
  props: {
    data: {
      type: Array,
      required: true,
    },
    productData: {
      type: Object,
      default: () => {},
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
  methods: {
    goProductPage(id) {
      this.$emit('goProductPage', id);
    },
    addCartHandler(product) {
      this.$emit('addCartHandler', product);
    },
  },
};
</script>
