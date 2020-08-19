<template>
  <VueSlickCarousel
    v-bind="settings"
    class="w-100"
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
            class="w-100 h-100"
            draggable="false"
          >
        </div>
        <div class="list-content">
          <h3>
            {{ product.title }}
          </h3>
          <p>售價：{{ product.price }}</p>
          <div class="list-btns">
            <button
              class="btn btn-outline btn-sm mr-2"
              @click="goProductPage(product.id)"
            >
              觀看更多
            </button>
            <button
              class="btn btn-sm btn-sm"
              @click="addCart(product)"
            >
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import { mapActions } from 'vuex';

export default {
  name: 'CarouselHome',
  components: { VueSlickCarousel },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      settings: {
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
      },
    };
  },
  methods: {
    ...mapActions({ addCart: 'Cart/addCart' }),
    goProductPage(id) {
      this.$router.push(`/Product/${id}`);
    },
  },
};
</script>

<style lang="scss" scorpd>
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
.slick-prev{
  @include media-down(sm) {
    left: -10px;
  }
}
.slick-next{
  @include media-down(sm) {
    right: -10px;
  }
}

</style>
